const crypto = require("crypto");
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; 
const IV_LENGTH = 16;

/**
 * Mengenkripsi teks menggunakan AES-256-CBC
 * 
 * @param {string} text - Data plaintext yang ingin dienkripsi
 * @returns {Object} - Objek yang berisi:
 *    - encryptedData: hasil enkripsi dalam format hex
 *    - iv: initialization vector yang digunakan (hex)
 */
function encrypt(text) {
    // Generate IV secara acak
    const iv = crypto.randomBytes(IV_LENGTH);
    
    // Buat cipher dengan algoritma AES-256-CBC
    const cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);

    // Proses enkripsi
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");

    // Return hasil enkripsi dan IV dalam format hex
    return {
        encryptedData: encrypted,
        iv: iv.toString("hex"),
    };
}

/**
 * Mendekripsi data yang telah dienkripsi oleh fungsi encrypt()
 * 
 * @param {string} encryptedData - Data terenkripsi dalam format hex
 * @param {string} ivHex - IV (Initialization Vector) yang digunakan saat enkripsi, dalam format hex
 * @returns {string} - Data asli (plaintext) setelah dekripsi
 */
function decrypt(encryptedData, ivHex) {
    // Ubah IV dari hex ke buffer
    const iv = Buffer.from(ivHex, "hex");

    // Buat decipher dengan algoritma dan IV yang sama
    const decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);

    // Proses dekripsi
    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted; // plaintext
}

module.exports = { encrypt, decrypt };
