# Cataloguing LLMs: Your Ultimate Market Guide

## Team Introduction
**Big Byte Theory**  
- **Amy Leung**: Software Engineer, Agile Project Management  
- **Kemi Alake**: Data Analyst, Data Processing and Analysis  
- **Josh Ashton**: Data Engineer, Data Integration and Management  
- **Chris De Wardt**: Data Engineer, Data Infrastructure and Pattern Matching  

## The Challenge
In regulated industries such as banking and pharmaceuticals, identifying suitable Large Language Models (LLMs) is a significant challenge. Businesses often struggle with determining which LLMs to consider and which to avoid. This issue is particularly pressing for market researchers, AI teams, and governance teams (including risk, tech, legal, and compliance) who need reliable information to make informed decisions. HorizonX Consultancy was looking for a team to create a centralized repository of LLM information, cataloging over 400 models currently on the market, to help provide crucial insights such as release dates, creators, number of parameters, training data, and any associated lawsuits. 

Similar to how Crunchbase leads in private company data, Lighthouse aims to be the largest and most comprehensive LLM database, akin to the Stanford Database, offering invaluable data and analysis to guide users in selecting the most appropriate LLMs for their needs.

## Key Features
- **Comprehensive List of LLMs**: Detailed information on each model.
- **User-Friendly Interface**: Easy navigation and search.
- **Informative Matrix**: Comparing popular LLMs.

## Evaluation Methodology
- **Criteria Selection**: Accuracy (Exact match, F1 score, BLEU-4), Benchmark Tests (Commonsense, GSM, etc.), Popularity.
- **Data Source/Processing**: Scores from Stanford HELM, integrated with MongoDB.
- **Weighting Criteria**: Business Readiness (40% accuracy, 60% benchmark), Perceived Business Value (capability scores, model popularity).

## Commercialization Strategy
- **Affiliate Marketing Model**: Commission from LLM firms for leads.
- **Strengths**: Low startup costs, passive income.
- **Weaknesses**: Tracking and attribution, competition.

## Market Expansion and Roadmap
- **Future Growth Areas**: Partner with firms for LLM deployment, develop a marketplace for engineers/consultants.
- **Continuous Improvement**: Integrate additional benchmarks, develop robust admin features, automate ETL pipeline updates.

## Tech Stack
- **MERN Stack**: Built with MongoDB, Express.js, React and Node.js.
- **Styling**: Tailwind CSS

## Reflection
- **Improvements**: Better modularization, enhanced communication, standardized naming conventions, dynamic data integration.

## Sources & Research
- **Stanford Database**: HELM framework for LLM benchmarking.
- **Ecosystem-Graphs**: General data on LLM models/applications/datasets.

## License
This project is licensed under the MIT License.

## Setup
`git clone` the repo.
`cd frontend/` - for client-side of project
`cd backend/` - for backend side of project
`npm start` - project start locally with locally hosted database
`npm run prod` - run project in production linked to cloud database
`npm build` - build dist files for the project (frontend)

Live View: https://lighthouse-29v4.onrender.com/