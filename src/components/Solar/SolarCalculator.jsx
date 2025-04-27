import React, { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const SolarCalculator = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [monthlyBill, setMonthlyBill] = useState('');
  const [connectionType, setConnectionType] = useState('domestic');
  const [loadRequired, setLoadRequired] = useState(null);
  const [panelWattage, setPanelWattage] = useState(500);
  const [solarResults, setSolarResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(prev => !prev);
    if (showOverlay) resetCalculator();
  };

  const resetCalculator = () => {
    setMonthlyBill('');
    setConnectionType('domestic');
    setLoadRequired(null);
    setSolarResults(null);
    setPanelWattage(500);
    setLoading(false);
  };

  const calculateUnitsFromBill = (billAmount) => {
    let units = 0;
    const slabs = [
      { limit: 124, rate: 6 },
      { limit: 124, rate: 7.3 },
      { limit: 62, rate: 8.2 },
      { limit: 52, rate: 8.4 },
      { limit: Infinity, rate: 9.19 },
    ];

    let remainingAmount = billAmount;
    for (const slab of slabs) {
      const maxUnitsInSlab = slab.limit;
      const possibleUnits = remainingAmount / slab.rate;
      const unitsInSlab = Math.min(possibleUnits, maxUnitsInSlab);
      units += unitsInSlab;
      remainingAmount -= unitsInSlab * slab.rate;
      if (remainingAmount <= 0) break;
    }
    return units;
  };

  const calculateFixedCharge = (load) => {
    return load ? (load * 70) * 1.05 : 0;
  };

  const handleCalculate = async (e) => {
    e.preventDefault();
    const bill = parseFloat(monthlyBill);
    if (isNaN(bill) || bill <= 0) {
      alert('Please enter a valid monthly bill amount.');
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const fixedCharge = calculateFixedCharge(1);
    const energyChargePart = bill - fixedCharge;
    const unitsConsumed = calculateUnitsFromBill(energyChargePart);

    const dailyUnits = unitsConsumed / 30;
    const estimatedLoad = dailyUnits / 4;
    const load = Math.ceil(estimatedLoad);
    setLoadRequired(load);

    let solarUnitsPerMonth = load * 3.8 * 30;

    // NEW LOGIC BASED ON CONNECTION TYPE
    if (connectionType === 'commercial') {
      solarUnitsPerMonth *= 0.9; // 90% utilization for commercial
    } 
    // else for domestic it remains 100% utilization

    const balanceUnits = unitsConsumed - solarUnitsPerMonth;
    let finalEnergyCharge = 0;
    let carryOverUnits = 0;

    if (balanceUnits > 0) {
      finalEnergyCharge = calculateBillForUnits(balanceUnits);
    } else {
      carryOverUnits = Math.abs(balanceUnits);
      finalEnergyCharge = 0;
    }

    const finalFixedCharge = calculateFixedCharge(load);
    const finalBill = finalEnergyCharge + finalFixedCharge;

    setSolarResults({
      unitsConsumed,
      solarUnitsGenerated: solarUnitsPerMonth,
      balanceUnits: balanceUnits > 0 ? balanceUnits : 0,
      carryOverUnits,
      finalBill: finalBill.toFixed(2),
      fixedCharge: finalFixedCharge.toFixed(2),
    });

    setLoading(false);
  };

  const calculateBillForUnits = (units) => {
    let bill = 0;
    const slabs = [
      { limit: 124, rate: 6 },
      { limit: 124, rate: 7.3 },
      { limit: 62, rate: 8.2 },
      { limit: 52, rate: 8.4 },
      { limit: Infinity, rate: 9.19 },
    ];

    let remainingUnits = units;
    for (const slab of slabs) {
      const unitsInSlab = Math.min(remainingUnits, slab.limit);
      bill += unitsInSlab * slab.rate;
      remainingUnits -= unitsInSlab;
      if (remainingUnits <= 0) break;
    }
    return bill;
  };

  const handlePanelWattageChange = (value) => {
    const wattage = parseInt(value);
    setPanelWattage(isNaN(wattage) || wattage <= 0 ? '' : wattage);
  };

  const panelsNeeded = loadRequired && panelWattage > 0
    ? Math.ceil((loadRequired * 1000) / panelWattage)
    : 0;

  const shadowFreeArea = loadRequired ? (loadRequired * 87).toFixed(2) : 0;

  const savingsPercentage = solarResults
    ? Math.max(0, (1 - (parseFloat(solarResults.finalBill) / parseFloat(monthlyBill))) * 100).toFixed(1)
    : 0;

  const savingsInRupees = solarResults
    ? (parseFloat(monthlyBill) - parseFloat(solarResults.finalBill)).toFixed(2)
    : 0;

  return (
    <div className="relative">
      <button
        onClick={toggleOverlay}
        aria-label="Open Solar Calculator"
        className="text-white text-4xl p-3 hover:scale-110 transition-transform duration-300"
      >
        <FaCalculator />
      </button>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-80 sm:px-6 md:px-10"
          >
            <div className="relative w-full max-w-md p-6 text-white bg-[#1a1a1a] rounded-2xl shadow-2xl sm:max-w-lg md:max-w-xl overflow-y-auto max-h-[95vh]">
              <button
                onClick={toggleOverlay}
                aria-label="Close Solar Calculator"
                className="absolute top-4 right-4 text-xl text-gray-400 hover:text-red-500"
              >
                ✕
              </button>

              <h2 className="mb-6 text-2xl font-bold text-center sm:text-3xl">
                {loadRequired ? 'Load and Billing Details' : 'Solar Calculator'}
              </h2>

              {!loadRequired ? (
                <form onSubmit={handleCalculate} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="connection-type" className="block text-sm font-medium">
                      Connection Type
                    </label>
                    <select
                      id="connection-type"
                      value={connectionType}
                      onChange={(e) => setConnectionType(e.target.value)}
                      className="w-full p-3 text-white bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="domestic">Domestic</option>
                      <option value="commercial">Commercial</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="monthly-bill" className="block text-sm font-medium">
                      Monthly Electricity Bill (₹)
                    </label>
                    <input
                      id="monthly-bill"
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      className="w-full p-3 text-white bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 2500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    {loading ? 'Calculating...' : 'Calculate Load'}
                  </button>
                </form>
              ) : loading ? (
                <div className="flex flex-col items-center justify-center min-h-[200px]">
                  <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                  <p className="mt-4 text-lg text-gray-300">Calculating, please wait...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <p className="text-lg font-medium text-center">
                    Estimated Load Required: <span className="text-blue-400">{loadRequired} kW</span>
                  </p>

                  <div className="space-y-2">
                    <label htmlFor="panel-wattage" className="block text-sm font-medium">
                      Panel Wattage (W)
                    </label>
                    <input
                      id="panel-wattage"
                      type="number"
                      value={panelWattage}
                      onChange={(e) => handlePanelWattageChange(e.target.value)}
                      className="w-full p-3 text-white bg-black border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 500"
                    />
                  </div>

                  <p className="text-lg font-medium text-center">
                    Number of Panels Needed: <span className="text-green-400">{panelsNeeded}</span>
                  </p>

                  <p className="text-lg font-medium text-center text-gray-300">
                    Estimated Shadow-Free Area Required: <span className="text-yellow-400">{shadowFreeArea} sq. ft.</span>
                  </p>

                  <div className="mt-8">
                    <h3 className="mb-4 text-lg font-semibold text-center">
                      Estimated Monthly Bill After Solar Installation
                    </h3>

                    <ResponsiveContainer width="100%" height={240}>
                      <BarChart data={[
                        { name: 'Before Solar', value: parseFloat(monthlyBill) || 0 },
                        { name: 'After Solar', value: solarResults ? parseFloat(solarResults.finalBill) : 0 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="url(#colorUv)" />
                        <defs>
                          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2} />
                          </linearGradient>
                        </defs>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <p className="mt-4 text-center text-green-400 font-semibold">
                    Your new estimated monthly bill: ₹{solarResults?.finalBill}
                  </p>

                  <p className="mt-4 text-center text-cyan-400 font-semibold">
                    Estimated Savings: {savingsPercentage}% 💸
                  </p>

                  <p className="mt-4 text-center text-yellow-400 font-semibold">
                    You save ₹{savingsInRupees} every month!
                  </p>

                  {solarResults?.balanceUnits > 0 && (
                    <p className="mt-4 text-center text-red-500 font-semibold">
                      Remaining Units: {solarResults?.balanceUnits.toFixed(2)} kWh
                    </p>
                  )}

                  {solarResults?.carryOverUnits > 0 && (
                    <p className="mt-4 text-center text-green-400 font-semibold">
                      Estimated excess Units Carried Over: {solarResults?.carryOverUnits.toFixed(2)} kWh
                    </p>
                  )}

                  <button
                    onClick={resetCalculator}
                    className="mt-4 w-full py-3 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                  >
                    Reset Calculator
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SolarCalculator;
