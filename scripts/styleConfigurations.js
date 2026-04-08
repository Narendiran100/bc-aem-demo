window.styleConfiguration = {
  metadata: {
    brandName: "Asian Paints",
    version: "1.0.0",
    language: "en-US",
    namespace: "brand-concierge",
  },
  behavior: {
    multimodalCarousel: {
      cardClickAction: "openLink",
    },
    input: {
      enableVoiceInput: false,
      disableMultiline: true,
      showAiChatIcon: false,
    },
    chat: {
      messageAlignment: "normal",
      messageWidth: "100%",
    },
    privacyNotice: {
      title: "Privacy Notice",
      text: "Your use of this automated chatbot constitutes your consent that the personal information you provide in the chat session can be collected, used, disclosed, and retained by Adobe and service providers acting on Adobe's behalf in accordance with the Adobe {Privacy Policy}. Please do not provide sensitive personal information (such as financial or health information) in the chatbot.",
      links: [
        {
          text: "Privacy Policy",
          url: "https://www.adobe.com/privacy/policy.html",
        },
      ],
    },
    chatTranscript: {
      enabled: false,
      maxSessions: 1,
      maxMessagesPerSession: 20,
      cleanupInterval: 24
    },
    meetingForm: {
      fieldsPerRow: 2,
      fieldLayoutRules: {
        textInputs: {
          allowTwoColumns: true,
          fieldTypes: ["string", "email", "tel", "number"],
        },
        dropdowns: {
          allowTwoColumns: false,
          fieldTypes: ["select"],
          identifyBy: "hasOptions",
        },
        checkboxes: {
          allowTwoColumns: false,
          fieldTypes: ["boolean", "checkbox"],
        },
      },
      title: {
        text: "Book an appointment",
        alignment: "left",
      },
      subtitle: {
        text: "I'd be happy to help you schedule a meeting! Please fill out the form below, and we'll follow up with a calendar to confirm your day and time.",
        alignment: "left",
      },
      buttons: {
        submit: {
          text: "Book an appointment",
          alignment: "left",
        },
        cancel: {
          text: "Cancel",
          alignment: "left",
        },
      },
    },
    calendarWidget: {
      title: {
        text: "Book an appointment",
        alignment: "left",
      },
      subtitle: {
        text: "Thanks! Here's a calendar where you can choose a time that works best for your schedule:",
        alignment: "left",
      },
      postTitle: {
        text: "Once confirmed, you'll receive a calendar invite with all the details. The specialist will already have this conversation context, so no need to repeat anything. Looking forward to connecting you with the right expert!",
        alignment: "left",
      },
      buttons: {
        confirm: {
          text: "Book an appointment",
          alignment: "left",
        },
        cancel: {
          text: "Cancel",
          alignment: "left",
        },
      },
    },
    productCard: { actionButtonSize: "S" },
  },
  disclaimer: {
    text: "AI responses may be inaccurate. Check answers and sources. {Terms}",
    links: [
      {
        text: "Terms",
        url: "https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html",
      },
    ],
  },
  text: {
    "welcome.heading": "Hi there, I am Asian Paints Concierge",
    "welcome.subheading":
      "What can I help you with today?",
    "input.placeholder": "Tell us what you'd like to do or create",
    "input.messageInput.aria": "Message input",
    "input.send.aria": "Send message",
    "input.aiChatIcon.tooltip": "Ask AI",
    "input.mic.aria": "Voice input",
    "card.aria.select": "Select example message",
    "carousel.prev.aria": "Previous cards",
    "carousel.next.aria": "Next cards",
    "scroll.bottom.aria": "Scroll to bottom",
    "error.network":
      "I'm sorry, I'm having trouble connecting to our services right now.",
    "loading.message": "Generating response from our knowledge base",
    "feedback.dialog.title.positive": "Your feedback is appreciated",
    "feedback.dialog.title.negative": "Your feedback is appreciated",
    "feedback.dialog.question.positive":
      "What went well? Select all that apply.",
    "feedback.dialog.question.negative":
      "What went wrong? Select all that apply.",
    "feedback.dialog.notes": "Notes",
    "feedback.dialog.submit": "Submit",
    "feedback.dialog.cancel": "Cancel",
    "feedback.dialog.notes.placeholder": "Additional notes (optional)",
    "feedback.toast.success": "Thank you for the feedback.",
    "feedback.thumbsUp.aria": "Thumbs up",
    "feedback.thumbsDown.aria": "Thumbs down",
  },
  arrays: {
    "welcome.examples": [
      {
        text: "Show me Modular Kitchen designs",
        image:
          "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/sleek-revamp/sleek-offerings/cresta-grazia.png",
        backgroundColor: "#ffa20c",
      },
      {
        text: "I am looking for dining table",
        image:
          "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/furniture-revamp/products-in-store/dining-table.png",
        backgroundColor: "#ffa20c",
      },
      {
        text: "How to clean texture paint",
        image:
          "https://static.asianpaints.com/content/dam/apcolourcatalogue/asset/ap-revamp/royale-play/trending-now/Lattice-layer-desk.webp",
        backgroundColor: "#ffa20c",
      },
      {
        text: "Show me ideas for dining room wallpaper",
        image:
          "https://static.asianpaints.com/content/dam/asianpaintsbeautifulhomes/202212/dining-room-wallpaper-ideas/dining-room-wallpaper-design-with-geometric-patterns.jpg",
        backgroundColor: "#ffa20c",
      },
    ],
    "feedback.positive.options": [
      "Helpful and relevant recommendations",
      "Clear and easy to understand",
      "Friendly and conversational tone",
      "Visually appealing presentation",
      "Other",
    ],
    "feedback.negative.options": [
      "Not helpful or relevant",
      "Confusing or unclear",
      "Too formal or robotic",
      "Poor visual presentation",
      "Other",
    ],
  },
  assets: {
    icons: {
      company: "",
    },
  },
  theme: {
    "--welcome-input-order": "3",
    "--welcome-cards-order": "2",
    "--font-family": "'Archivo', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    "--color-primary": "#D17B4F",
    "--color-text": "#000000",
    "--color-text-secondary": "#000000",
    "--color-text-primary": "#bcbcbc",
    "--line-height-body": "1.75",
    "--main-container-background": "#F5E6D3",
    "--chat-container-background": "#F5E6D3",
    "--chat-container-bottom-background": "transparent",
    "--input-height": "52px",
    "--input-height-mobile": "52px",
    "--input-border-radius": "26px",
    "--input-border-radius-mobile": "26px",
    "--input-background": "#FFFFFF",
    "--input-outline-color": "#D17B4F",
    "--input-outline-width": "2px",
    "--input-box-shadow": "0 4px 16px 0 rgba(0, 0, 0, 0.1)",
    "--input-focus-outline-width": "2px",
    "--input-focus-outline-color": "#D17B4F",
    "--input-font-size": "16px",
    "--input-text-color": "#292929",
    "--input-button-height": "36px",
    "--input-button-width": "36px",
    "--submit-button-fill-color": "#D17B4F",
    "--submit-button-fill-color-disabled": "#C6C6C6",
    "--submit-button-fill-color-hover": "#B8653D",
    "--color-button-submit": "#FFFFFF",
    "--color-button-submit-hover": "#FFFFFF",
    "--input-button-border-radius": "18px",
    "--button-disabled-background": "#E5E5E5",
    "--disclaimer-color": "#6B6B6B",
    "--disclaimer-font-size": "12px",
    "--disclaimer-font-weight": "400",
    "--message-user-background": "#D17B4F",
    "--message-user-text": "#FFFFFF",
    "--message-border-radius": "16px",
    "--message-padding": "0px 0px",
    "--message-concierge-background": "#FFF5EB",
    "--message-concierge-text": "#292929",
    "--message-max-width": "100%",
    "--chat-interface-max-width": "768px",
    "--message-blocker-height": "105px",
    "--message-blocker-background": "#F5E6D3",
    "--citations-text-font-weight": "700",
    "--citations-desktop-button-font-size": "14px",
    "--feedback-icon-btn-background": "#FFFFFF",
    "--feedback-icon-btn-hover-background": "#F5F5F5",
    "--feedback-icon-btn-size-desktop": "32px",
    "--feedback-container-gap": "4px",
    "--multimodal-card-box-shadow": "0 2px 8px rgba(0, 0, 0, 0.08)",
    "--border-radius-card": "16px",
    "--button-height-s": "36px",
    "--button-primary-background": "#D17B4F",
    "--button-primary-text": "#FFFFFF",
    "--button-primary-hover": "#B8653D",
    "--button-secondary-background": "#FFFFFF",
    "--button-secondary-border": "#D17B4F",
    "--button-secondary-border-width": "2px",
    "--button-secondary-text": "#D17B4F",
    "--button-secondary-hover": "#D17B4F",
    "--color-button-secondary-hover-text": "#FFFFFF",
    "--input-form-background": "#FFFFFF",
    "--color-border-subtle": "#E5E5E5",
    "--border-radius-medium": "12px",
    "--input-form-shadow": "rgba(0, 0, 0, 0.1)",
    "--privacy-notice-background": "#FFF5EB",
    "--privacy-notice-padding": "12px 16px",
    "--privacy-notice-text-font-size": "12px",
    "--privacy-notice-title-font-size": "14px",
    "--message-concierge-link-decoration": "underline",
    "--dialog-background": "#FFF5EB",
    "--message-concierge-link-color":"rgb(115, 69, 178)"
  },
};
