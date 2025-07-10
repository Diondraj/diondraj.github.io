import { Link } from 'react-router-dom'
import Badges from './badges.jsx'


export default function ProjectCard({projects}) {
    return (
         <div id="portfolio" className="scroll-mt-32" >
          <h2 className="mt-16 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
            Portfolio
          </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 scroll-mt-24 py-16 px-16 lg:px-40">
                    {projects.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col justify-between p-6 shadow-lg ring-2 ring-amber-400/50 rounded-md bg-white"
                      >
                        <h2 className="text-2xl font-semibold text-gray-900">
                          {item.name}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    
                        {/* Flexbox wrapper to put image and summary side by side */}
                        <div className="flex flex-wrap lg:items-start sm:items-center gap-4 mb-4">
                          <img
                            src={item.thumbnail}
                            alt={`${item.name} thumbnail`}
                            className="w-32 h-auto rounded-md flex-shrink-0"
                          />
                          <p className="text-left text-sm text-gray-700">{item.summary}</p>
                        </div>
                       <div className="flex items-start gap-4 mb-4">
                        <></>
                        <Badges tool1={item.tool1} tool2={item.tool2} tool3={item.tool3}/>
                        </div>
                        {/* Internal vs External link logic */}
                        {item.href ? (
                          item.href.startsWith('http') ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bcbtn bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded text-center"
                            >
                              See Project
                            </a>
                          ) : (
                            <Link
                              to={item.href}
                              className="bcbtn bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded text-center"
                            >
                              See Project
                            </Link>
                          )
                        ) : null}
                      </div>
                    ))}
                  </div>
          </div>
    )
}