imimport mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI; // Veilig ophalen uit env variabelen

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(MONGODB_URI);
    }
};

// api/order.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Ontvang bestelling van de frontend
        const { name, email, items } = req.body;

        // Log de bestelling naar de console (optioneel voor debuggen)
        console.log(`Bestelling ontvangen van ${name} (${email}) voor items:`, items);

        // Hier kun je de bestelling verwerken, bijvoorbeeld door deze op te slaan in een database
        // Voor nu sturen we gewoon een succesbericht terug.

        res.status(200).json({ message: 'Bestelling ontvangen!' });
    } else {
        // Als het geen POST-verzoek is, stuur dan een foutmelding
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}