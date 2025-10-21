"use client";
import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const locations = [
    { name: "North America", coordinates: [-100, 40] },
    { name: "Europe", coordinates: [10, 50] },
    { name: "Africa", coordinates: [20, 0] },
    { name: "Asia", coordinates: [100, 60] },
    { name: "East Asia", coordinates: [120, 35] },
];

export default function WorldMap() {
    const [geographies, setGeographies] = useState([]);

    useEffect(() => {
        // Fetch the TopoJSON data
        fetch("https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json")
            .then((res) => res.json())
            .then((data) => setGeographies(data.objects.ne_110m_admin_0_countries.geometries))
            .catch((err) => console.error("Error loading map:", err));
    }, []);

    return (
        <div className="w-full flex justify-center mt-16">
            <ComposableMap projectionConfig={{ scale: 150 }} width={1000} height={500}>
                {geographies.length > 0 && (
                    <Geographies geography={{
                        type: "FeatureCollection",
                        features: geographies.map((geo) => ({
                            type: "Feature",
                            geometry: geo,
                            properties: geo.properties || {},
                        })),
                    }}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#B8860B"
                                    stroke="#FFD700"
                                    strokeWidth={0.5}
                                />
                            ))
                        }
                    </Geographies>
                )}

                {locations.map(({ name, coordinates }, i) => (
                    <Marker key={i} coordinates={coordinates}>
                        <circle r={6} fill="#FFD700" stroke="#fff" strokeWidth={2} />
                        <text
                            textAnchor="middle"
                            y={-12}
                            style={{
                                fontFamily: "var(--font-montserrat)",
                                fill: "#FFD700",
                                fontSize: "12px",
                                fontWeight: "bold",
                            }}
                        >
                            {name}
                        </text>
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
}
