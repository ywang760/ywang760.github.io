import Link from "next/link";
import React from "react";

const Experiences = () => {
  return (
    <div className="space-y-6 pt-2">
      <h1 className="text-4xl text-primary-600">Experiences</h1>
      <div className="flex flex-col space-y-6">
        {/* Horizon Robotics */}
        <div className="flex w-full border border-primary-700 p-6 rounded-lg md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex my-auto justify-center items-center text-center p-2 bg-primary-600 text-gray-200 rounded-md md:w-1/5">
            June - Aug 2023
          </div>
          <div className="md:w-4/5 flex flex-col space-y-2">
            <Link
              href="https://en.horizon.cc/"
              className="text-2xl text-primary-600"
              target="_blank"
            >
              Horizon Robotics
            </Link>
            <h3 className="text-lg">
              Machine Learning Infrastructure - Software Engineering Intern
            </h3>
            <div className="">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Contributed to the development of Horizon Data Flow in{" "}
                  <span className="font-semibold text-primary-600">Python</span>
                  , an internal data management software for machine learning
                  data preprocessing. Specifically optimized three data
                  annotation algorithms for autonomous vehicle perception data,
                  achieving an accuracy of about 90% and doubled efficiency
                </li>
                <li>
                  Maintained 5{" "}
                  <span className="font-semibold text-primary-600">
                    MongoDB
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-primary-600">
                    Apache Doris
                  </span>{" "}
                  databases for autonomous vehicle perception data, and
                  optimized data structure that resulted in improved
                  interpretability and 4 times faster query response speed
                </li>
                <li>
                  Produced 2 dynamic data visualization dashboards using{" "}
                  <span className="font-semibold text-primary-600">
                    Apache Superset
                  </span>{" "}
                  with labeled datasets, and developed customizable filters to
                  perception and trajectory planning teams for meta-analysis of
                  projects
                </li>
                <li>
                  Designed an internal tool to convert perception data to
                  various formats to be visualized on{" "}
                  <span className="font-semibold text-primary-600">
                    Foxglove Studio
                  </span>
                  , resulting in a time-saving of over 60% compared to the
                  previous method, benefiting more than 300 colleagues
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SafeMode Mobility */}
        <div className="flex w-full border border-primary-700 p-6 rounded-lg md:space-x-8 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex my-auto justify-center items-center text-center p-2 bg-primary-600 text-gray-200 rounded-md md:w-1/5">
            June - Aug 2022
          </div>
          <div className="md:w-4/5 flex flex-col space-y-2">
            <Link
              href="https://www.safemode.co/"
              className="text-2xl text-primary-600"
              target="_blank"
            >
              SafeMode Mobility
            </Link>
            <h3 className="text-lg">Data Analyst Intern</h3>
            <div className="">
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  Conducted market research and created content for email
                  marketing campaigns using Apollo, performed{" "}
                  <span className="font-semibold text-primary-600">
                    A/B testing
                  </span>{" "}
                  for content improvement, and increased customer base by about
                  30%
                </li>
                <li>
                  Interviewed existing customers, wrote and edited 6 case
                  studies for distribution online and at conferences
                </li>
                <li>
                  Delegated to the 2022 Home Delivery World conference in
                  Philadelphia, PA, and assisted the company founder in
                  presentations to more than 200 prospective clients
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2></h2>
        </div>
      </div>

      {/* TODO: move education heres */}
    </div>
  );
};

export default Experiences;
