import { GoogleGenAI, Chat } from "@google/genai";
import { MOSES_BIO } from "../constants";

export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    this.chat = this.ai.chats.create({
      model: "gemini-3-flash-preview",
      config: {
        systemInstruction: `You are the AI version of Moses, a senior software engineer. 
        Your goal is to answer questions about Moses's career, skills, and projects in a professional, friendly, and helpful manner.
        Here is your background: ${MOSES_BIO}.
        Keep your responses concise and engaging. If asked about something you don't know, suggest they contact the real Moses via the contact form.`,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage({ message });
      return (
        result.text || "I couldn't process that response. Please try again."
      );
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having a bit of trouble connecting right now. Please try again or reach out to Moses directly!";
    }
  }
}

export const geminiService = new GeminiService();
