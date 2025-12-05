import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const connectionString = process.env.DB_STRING;

console.log("🏴󠁧󠁢󠁳󠁣󠁴󠁿 Highland Games Paisley - Test de Connexion DB");
console.log("Connection String:", connectionString);

async function testConnection() {
    try {
        await mongoose.connect(connectionString, {
            autoIndex: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log("✅ Connexion réussie à MongoDB !");
        
        // Test des collections existantes
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("📚 Collections disponibles:", collections.map(c => c.name));
        
        // Test simple de count
        const Event = mongoose.model('Event', new mongoose.Schema({}));
        const eventCount = await Event.countDocuments();
        console.log(`🎯 Nombre d'événements: ${eventCount}`);
        
    } catch (error) {
        console.error("❌ Erreur de connexion:", error.message);
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Connexion fermée");
        process.exit(0);
    }
}

testConnection();