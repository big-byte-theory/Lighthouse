import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
  query: {
    type: String,
  },
  articles: [{
    title: { type: String, },
    description: { type: String, },
    link: { type: String, },
    pubDate: { type: String, },
    image_url: { type: String, },
    source_url: { type: String, },
    source_icon: { type: String, },
    country: [{type: String}],

  }],
});

const LlmNews = mongoose.model('llm_news', NewsSchema, 'llm_news');

export default LlmNews;