const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

require('./models/Llm');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/llmaccess', require('./routes/llmAccessRoutes'));
app.use('/api/llmadaptation', require('./routes/llmAdaptationRoutes'));
app.use('/api/llmanalysis', require('./routes/llmAnalysisRoutes'));
app.use('/api/llmcreateddate', require('./routes/llmCreatedDateRoutes'));
app.use('/api/llmdata', require('./routes/llmDataRoutes'));
app.use('/api/llmdatasheet', require('./routes/llmDatasheetRoutes'));
app.use('/api/llmdependencies', require('./routes/llmDependenciesRoutes'));
app.use('/api/llmdescription', require('./routes/llmDescriptionRoutes'));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));