import React, { useState, useEffect } from 'react';
import './SustainabilityMetrics.css';
import metricsData from './sampleData'; // Adjust the path if necessary
import logo4 from './landuse.jpeg';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

// Register chart components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const SustainabilityAndBiodiversity = () => {
    const [metrics, setMetrics] = useState([]);

    useEffect(() => {
        setMetrics(metricsData.sustainabilityMetrics);
    }, []);

    const biodiversityData = {
        metrics: [
            { label: 'Pollinator Species Richness', value: 25 },
            { label: 'Invasive Species Count', value: 5 },
            { label: 'Habitat Area Restored (hectares)', value: 50 },
            { label: 'Native Plant Species Count', value: 30 },
        ],
    };

    const data = {
        labels: biodiversityData.metrics.map((metric) => metric.label),
        datasets: [
            {
                label: 'Impact on Biodiversity',
                data: biodiversityData.metrics.map((metric) => metric.value),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                barThickness: 20, // Decrease the size of bar graphs
            },
        ],
    };

    return (
        <div className="combined-container">
            <h2>Sustainability Metrics</h2>
            <img src={logo4} alt="Composite Land Image" className="land-image" />

            <p>
                Sustainability metrics are quantitative measures used to assess the 
                environmental, social, and economic impacts of practices and policies. 
                They help organizations and individuals understand how their activities 
                affect the planet and society, guiding improvements toward sustainability. 
                These metrics can include data on resource consumption, waste generation, 
                biodiversity health, and community engagement.
            </p>
            <table className="metrics-table">
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {metrics.length > 0 ? (
                        metrics.map((metric, index) => (
                            <tr key={index}>
                                <td>{metric.metric}</td>
                                <td>{metric.value}</td>
                                <td>{metric.unit}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h2>Biodiversity Impact Assessment</h2>
            <p>
                Biodiversity refers to the variety of life on Earth and the natural
                patterns it forms. Understanding the impact of food production
                practices on local biodiversity is crucial for sustainable development
                and ecosystem health.
            </p>
            <h3>Key Metrics</h3>
            <table className="biodiversity-table">
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {biodiversityData.metrics.length > 0 ? (
                        biodiversityData.metrics.map((metric, index) => (
                            <tr key={index}>
                                <td>{metric.label}</td>
                                <td>{metric.value}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h3>Impact Visualization</h3>
            <Bar data={data} options={{ responsive: true }} />

            <h3>Best Practices</h3>
            <ul>
                <li>Implement crop rotation to enhance soil health.</li>
                <li>Use organic farming practices to reduce pesticide use.</li>
                <li>Preserve natural habitats within agricultural landscapes.</li>
                <li>Encourage agroforestry systems to enhance biodiversity.</li>
            </ul>

            <h3>Case Studies</h3>
            <div className="case-study">
                <p>
                    <strong>Case Study 1:</strong> The reintroduction of native plant species in a
                    local farm increased pollinator populations and improved crop yields.
                </p>
            </div>
            <div className="case-study">
                <p>
                    <strong>Case Study 2:</strong> The use of monoculture farming led to a decline
                    in local bird species due to habitat loss.
                </p>
            </div>
        </div>
    );
};

export default SustainabilityAndBiodiversity;
