import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UpiIcon from "@mui/icons-material/Payment";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { jsPDF } from "jspdf";
import { useLocation } from "react-router-dom";
import "jspdf-autotable";
import axios from "axios";

export default function Payment() {
  const [openDialog, setOpenDialog] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const location = useLocation();
  const { ticketCount, totalAmount, event } = location.state || {};

  const taxRate = 0.02;
  const totalAmountWithTax = totalAmount * (1 + taxRate);

  const handlePayNow = () => {
    const doc = new jsPDF();
    const eventDetails = `
      Event Ticket
      Event Name: ${event.eventName}
      Event Date: ${event.eventDate}
      Event Time: ${event.eventTime}
      Event Location: ${event.eventAddress}
      Number of Tickets: ${ticketCount}
      Total Amount: ${totalAmount}
      Tax (2%): ${(totalAmount * taxRate).toFixed(2)}
      Total Amount with Tax: ${totalAmountWithTax.toFixed(2)}
      Ticket ID: ${Math.random().toString(36).substring(2, 15)}
    `;
    doc.text(eventDetails, 10, 10);

    // Create a blob URL for the generated PDF
    const pdfOutput = doc.output("bloburl");
    setPdfUrl(pdfOutput);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSendEmail = async () => {
    const doc = new jsPDF();
    const eventDetails = {
      "Event Name": event.eventName,
      "Event Date": event.eventDate,
      "Event Time": event.eventTime,
      "Event Location": event.eventAddress,
      "Number of Tickets": ticketCount,
      "Total Amount": totalAmount,
      "Tax (2%)": (totalAmount * taxRate).toFixed(2),
      "Total Amount with Tax": totalAmountWithTax.toFixed(2),
      "Ticket ID": Math.random().toString(36).substring(2, 15),
    };

    // Set the title
    doc.setFontSize(22);
    doc.text("Event Ticket", 105, 20, { align: "center" });

    // Set the subtitle
    doc.setFontSize(16);
    doc.setTextColor(100);
    doc.text("Ticket Details", 105, 30, { align: "center" });

    // Add the event details table
    doc.autoTable({
      startY: 40,
      body: Object.entries(eventDetails).map(([key, value]) => ({
        key,
        value,
      })),
      columns: [
        { header: "Field", dataKey: "key" },
        { header: "Details", dataKey: "value" },
      ],
      theme: "striped",
      styles: {
        fontSize: 12,
        halign: "center",
      },
      headStyles: {
        fillColor: [0, 0, 0],
      },
      bodyStyles: {
        textColor: [0, 0, 0],
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
    });

    const pdfBlob = doc.output("blob");
    const formData = new FormData();
    formData.append("pdf", pdfBlob, "ticket.pdf");

    try {
      alert("Ticket sent via email successfully!");
      const response = await axios.post(
        "http://localhost:8080/otp/sendEmail",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error sending ticket:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        p: 4,
        backgroundColor: "#131112",
      }}
    >
      <Card
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 4,
          backgroundColor: "#ffffff",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#333",
              textAlign: "center",
            }}
          >
            Payment Modes
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              mb: 4,
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ccc",
                color: "#333",
                borderRadius: 2,
                fontSize: "1.1rem",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <MonetizationOnIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              Internet Banking
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ccc",
                color: "#333",
                borderRadius: 2,
                fontSize: "1.1rem",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <UpiIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              UPI Payment
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#ccc",
                color: "#333",
                borderRadius: 2,
                fontSize: "1.1rem",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <CreditCardIcon sx={{ mr: 1, fontSize: "1.5rem" }} />
              Credit/Debit Card
            </Button>
          </Box>
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="h6">Total Amount:</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ₹{totalAmount.toFixed(2)}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="h6">Tax (2%):</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ₹{(totalAmount * taxRate).toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6">Total Amount with Tax:</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ₹{totalAmountWithTax.toFixed(2)}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f2ae01",
              color: "#fff",
              width: "100%",
              fontSize: "1.1rem",
              padding: "12px 16px",
              "&:hover": {
                bgcolor: "#f2ae01",
              },
              "&:focus": {
                ringColor: "#c81d62",
              },
            }}
            onClick={handlePayNow}
          >
            Pay Now
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          sx: {
            minWidth: "800px",
            maxWidth: "900px",
            height: "auto", 
            borderRadius: 3,
            p: 4,
            boxShadow: 24,
            overflowY: "auto",
          },
        }}
      >
        <DialogTitle
          sx={{
            bgcolor: "transparent",
            color: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 4,
            borderRadius: "3px 3px 0 0",
            fontSize: "1.8rem",
            fontWeight: "bold",
          }}
        >
          Payment Successful
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              color: "#333",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            lineHeight: 1.5,
            mb: 2,
            px: 4,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your payment has been processed successfully.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            You can download your ticket or send it via email.
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: 4,
            pb: 2,
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f2ae01",
              color: "#fff",
              fontSize: "1rem",
              padding: "12px 20px",
              "&:hover": {
                bgcolor: "#f2ae01",
              },
              "&:focus": {
                ringColor: "#c81d62",
              },
            }}
            href={pdfUrl}
            download="ticket.pdf"
          >
            Download Ticket
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#f2ae01",
              color: "#fff",
              fontSize: "1rem",
              padding: "12px 20px",
              "&:hover": {
                bgcolor: "#f2ae01",
              },
              "&:focus": {
                ringColor: "#c81d62",
              },
            }}
            onClick={handleSendEmail}
          >
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
