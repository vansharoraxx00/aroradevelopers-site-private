import React from "react";

export default function ContactUs() {
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      background: "linear-gradient(to right, #f9f9f9, #e0f7ff)",
      minHeight: "calc(100vh - 80px)",
    },
    card: {
      backgroundColor: "#ffffff",
      padding: "40px",
      maxWidth: "600px",
      width: "100%",
      borderRadius: "16px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', sans-serif",
    },
    title: {
      fontSize: "30px",
      fontWeight: "600",
      color: "#333",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "16px",
      color: "#666",
      marginBottom: "30px",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
      transition: "border-color 0.3s",
    },
    textarea: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
      resize: "vertical",
      minHeight: "120px",
      transition: "border-color 0.3s",
    },
    button: {
      width: "100%",
      padding: "14px",
      fontSize: "16px",
      fontWeight: "600",
      color: "#fff",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.title}>Contact Us</h2>
        <p style={styles.subtitle}>
          We'd love to hear from you! Fill out the form and we’ll get back to you shortly.
        </p>

        <form>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              style={styles.input}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="message" style={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              required
              style={styles.textarea}
              onFocus={(e) => (e.target.style.borderColor = "#007bff")}
              onBlur={(e) => (e.target.style.borderColor = "#ccc")}
            />
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
