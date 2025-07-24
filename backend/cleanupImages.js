import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import foodModel from './models/foodModel.js';
import { connectDB } from './config/db.js';

// Get current dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads');

async function cleanupOrphanedImages() {
    console.log('Starting orphaned image cleanup...');
    
    // Connect to database
    await connectDB();
    
    try {
        // Get all food items from database
        const allFoods = await foodModel.find({});
        const databaseImages = new Set(allFoods.map(food => food.image));
        
        console.log(`Found ${databaseImages.size} images referenced in database`);
        
        // Read all files in uploads directory
        fs.readdir(uploadDir, (err, files) => {
            if (err) {
                console.error(`Error reading uploads directory: ${err.message}`);
                process.exit(1);
            }
            
            console.log(`Found ${files.length} files in uploads directory`);
            
            // Find orphaned files (in directory but not in database)
            const orphanedFiles = files.filter(file => !databaseImages.has(file));
            
            console.log(`Found ${orphanedFiles.length} orphaned image files`);
            
            // Delete orphaned files
            orphanedFiles.forEach(file => {
                const filePath = path.join(uploadDir, file);
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error(`Error deleting file ${file}: ${err.message}`);
                    } else {
                        console.log(`Deleted orphaned file: ${file}`);
                    }
                });
            });
            
            console.log('Cleanup complete!');
            process.exit(0);
        });
    } catch (error) {
        console.error(`Error during cleanup: ${error.message}`);
        process.exit(1);
    }
}

// Run the cleanup
cleanupOrphanedImages();
