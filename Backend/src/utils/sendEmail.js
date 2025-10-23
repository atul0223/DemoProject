import axios from "axios";

const sendEmail = async (name,email,phone,message) => {

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>🔐 new quote</h2>
      <p>New quote :</p>
      <div style="font-size: 24px; font-weight: bold; background: #f0f0f0; padding: 10px; border-radius: 6px; text-align: center;">
        name:${name}
      </div>
        <div style="font-size: 24px; font-weight: bold; background: #f0f0f0; padding: 10px; border-radius: 6px; text-align: center;">
        email:${email}
      </div>
        <div style="font-size: 24px; font-weight: bold; background: #f0f0f0; padding: 10px; border-radius: 6px; text-align: center;">
        phone:${phone}
      </div>
        <div style="font-size: 24px; font-weight: bold; background: #f0f0f0; padding: 10px; border-radius: 6px; text-align: center;">
        message:${message}
      </div>
       </div>
  `;

  try {
    
    
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "All in one", email: "atulbramhan@gmail.com" },
       to: [{ email: "atulbramhan@gmail.com", name: "Atul Bramhan" }], 

        subject: "new quote",
        htmlContent,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Brevo API email sent successfully");
    
  } catch (error) {
  console.error("Brevo API email failed:", {
    status: error?.response?.status,
    data: error?.response?.data,
    headers: error?.response?.headers,
  });
  throw new Error("Failed to send quote. Please try again later.",error);
}
};

export default sendEmail;