
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SKILLS } from '../constants';

const SkillVisualizer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 800;
    const height = 400;
    svg.selectAll("*").remove();

    // Accessibility: Set SVG attributes
    svg.attr("role", "graphics-document")
       .attr("aria-label", "Horizontal bar chart showing Moses's core technical skills and proficiency levels");

    // Add a descriptive title for screen readers
    svg.append("title")
       .attr("id", "chart-title")
       .text("Moses's Technical Skills Proficiency Chart");

    const margin = { top: 20, right: 30, bottom: 40, left: 150 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, innerWidth]);

    const y = d3.scaleBand()
      .domain(SKILLS.map(d => d.name))
      .range([0, innerHeight])
      .padding(0.3);

    // Create a color scale
    const colorScale = d3.scaleLinear<string>()
      .domain([0, SKILLS.length])
      .range(["#818cf8", "#4338ca"]);

    // Grid lines - marked as decorative
    g.append("g")
      .attr("class", "grid")
      .attr("aria-hidden", "true")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x).ticks(5).tickSize(-innerHeight).tickFormat(() => ""))
      .attr("color", "#1f2937")
      .style("stroke-dasharray", "3,3");

    // Bars (Initially width 0)
    const bars = g.selectAll(".bar")
      .data(SKILLS)
      .enter()
      .append("rect")
      .attr("class", "bar focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all")
      .attr("y", d => y(d.name)!)
      .attr("height", y.bandwidth())
      .attr("x", 0)
      .attr("width", 0)
      .attr("rx", 4)
      .attr("fill", (d, i) => colorScale(i))
      // Accessibility: Bar attributes
      .attr("role", "graphics-symbol")
      .attr("tabindex", "0")
      .attr("aria-label", d => `${d.name}: ${d.level} percent proficiency`)
      // Keyboard interaction
      .on("keydown", function(event, d) {
        if (event.key === 'Enter' || event.key === ' ') {
          console.log(`Focused on ${d.name}`);
        }
      });

    // Labels
    g.append("g")
      .call(d3.axisLeft(y).tickSize(0))
      .attr("color", "#9ca3af")
      .attr("aria-hidden", "true") // Hidden because bar has aria-label
      .style("font-size", "14px")
      .selectAll("text")
      .attr("dx", -10);

    // Percentage Labels (Initially hidden)
    const labels = g.selectAll(".label")
      .data(SKILLS)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("aria-hidden", "true") // Hidden because bar has aria-label
      .attr("x", d => x(d.level) + 10)
      .attr("y", d => y(d.name)! + y.bandwidth() / 2 + 5)
      .text(d => `${d.level}%`)
      .attr("fill", "#6366f1")
      .attr("font-weight", "bold")
      .attr("font-size", "12px")
      .attr("opacity", 0);

    // Setup Intersection Observer to trigger animation
    const observerOptions = {
      root: null,
      threshold: 0.2, // Trigger when 20% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger Bar Animation
          bars.transition()
            .duration(1500)
            .ease(d3.easeCubicOut)
            .attr("width", d => x(d.level));

          // Trigger Label Animation
          labels.transition()
            .delay(1000)
            .duration(500)
            .attr("opacity", 1);

          // Once animated, we can stop observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full overflow-x-auto custom-scrollbar glass-effect p-8 rounded-3xl border border-gray-800"
      aria-labelledby="skill-visualizer-title"
    >
      <h3 id="skill-visualizer-title" className="text-xl font-bold mb-8 flex items-center">
        <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center mr-3">
          <i className="fas fa-chart-bar text-xs" aria-hidden="true"></i>
        </span>
        Core Competencies
      </h3>
      <div className="relative">
        <svg 
          ref={svgRef} 
          width="800" 
          height="400" 
          className="mx-auto" 
          viewBox="0 0 800 400"
        ></svg>
      </div>
      <p className="sr-only">
        The chart above displays Moses's proficiency in various technologies. 
        React and Next.js are at 95 percent, TypeScript at 90 percent, Tailwind CSS at 95 percent, 
        D3.js and Recharts at 85 percent, Node.js and Express at 80 percent, 
        PostgreSQL at 75 percent, Gemini API at 85 percent, and Docker CI CD at 70 percent.
      </p>
    </div>
  );
};

export default SkillVisualizer;
