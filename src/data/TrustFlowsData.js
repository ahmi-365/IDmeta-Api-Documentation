export const trustFlows = {
  title: "Trust Flows",
  subtitle:
    "Understand how trust is built, transferred, and maintained between users, systems, and organizations.",
  sections: [
    {
      heading: "Common Issues",
      cards: [
        {
          title: "Lack of Transparency",
          text: "Users lose trust when processes, policies, or decisions are hidden.",
          solution:
            "Communicate policies clearly, explain decision-making, and provide easy access to information.",
          code: `// Example: Log and display transparent policy
function showPolicy(policy) {
  console.log("Policy:", policy);
  document.getElementById("policySection").innerText = policy;
}
showPolicy("All user data is encrypted and never shared.");`,
        },
        {
          title: "Inconsistent Behavior",
          text: "Trust breaks down when actions do not align with stated values.",
          solution:
            "Maintain consistency across communication, actions, and brand promises.",
          code: `// Example: Consistency check
const expectedValue = "secure";
const actualValue = systemConfig.securityMode;

if (expectedValue !== actualValue) {
  console.error("Inconsistency detected!");
}`,
        },
        {
          title: "Data Privacy Concerns",
          text: "Mishandling or over-collecting data can erode trust quickly.",
          solution:
            "Collect only necessary data, ensure compliance with privacy laws, and be transparent about usage.",
          code: `// Example: Collect only required fields
const userData = {
  name: form.name,
  email: form.email,
  // Do not collect unnecessary sensitive info
};`,
        },
      ],
    },
    {
      heading: "Trust-Building Tools",
      cards: [
        {
          title: "Reputation Systems",
          text: "Use ratings, reviews, and feedback to demonstrate credibility.",
          tip: "Highlight verified reviews and showcase trust badges.",
          code: `// Example: Calculate reputation score
const reviews = [5, 4, 5, 3, 4];
const reputationScore = reviews.reduce((a, b) => a + b, 0) / reviews.length;
console.log("Reputation Score:", reputationScore);`,
        },
        {
          title: "Verification Processes",
          text: "Identity verification and certification increase user confidence.",
          tip: "Use multi-factor authentication and verified profiles for sensitive interactions.",
          code: `// Example: MFA check
async function verifyUser(user) {
  const otpValid = await otpService.verify(user.otp);
  const idValid = await idService.check(user.id);
  return otpValid && idValid;
}`,
        },
        {
          title: "Clear Communication",
          text: "Proactive communication builds trust in services and organizations.",
          tip: "Provide status updates, transparent policies, and quick responses to issues.",
          code: `// Example: Send proactive status update
notifyUser("Your request has been received and is being processed.");`,
        },
      ],
    },
    {
      heading: "Best Practices for Trust",
      lists: [
        {
          title: "Transparency",
          items: [
            "Openly share policies and procedures",
            "Disclose risks and limitations honestly",
            "Allow users to access their data easily",
          ],
          code: `// Example: Allow user to view their data
app.get("/my-data", (req, res) => {
  res.json(userDatabase[req.user.id]);
});`,
        },
        {
          title: "Reliability",
          items: [
            "Deliver services consistently without interruptions",
            "Honor commitments and timelines",
            "Maintain high service uptime",
          ],
          code: `// Example: Reliability check
setInterval(() => {
  console.log("Service uptime check:", new Date());
}, 60000);`,
        },
        {
          title: "Security & Privacy",
          items: [
            "Encrypt sensitive data",
            "Use secure channels for all communication",
            "Regularly audit security practices",
          ],
          code: `// Example: Encrypt sensitive info
const crypto = require("crypto");
const secret = "key";
const encrypted = crypto.createHmac("sha256", secret).update("password123").digest("hex");
console.log("Encrypted:", encrypted);`,
        },
      ],
    },
    {
      heading: "Optimization of Trust Flows",
      lists: [
        {
          title: "Onboarding Trust",
          items: [
            "Provide clear onboarding instructions",
            "Show credibility (certifications, testimonials)",
            "Offer guarantees or free trials",
          ],
          code: `// Example: Show onboarding message
console.log("Welcome! Verified company. 30-day money-back guarantee included.");`,
        },
        {
          title: "Ongoing Engagement",
          items: [
            "Maintain transparent communication",
            "Recognize loyal users",
            "Offer regular updates on improvements",
          ],
          code: `// Example: Recognize loyal user
if (user.orders > 10) {
  sendReward(user.id, "Loyalty badge awarded!");
}`,
        },
      ],
    },
    {
      heading: "Validation APIs",
      cards: [
        {
          title: "Trust Score API",
          text: "Assign real-time trust scores to users and transactions based on multiple risk factors.",
          code: `// Generate trust score
const trustScore = await client.trust
  .scores
  .create({ user: 'user123', factors: ['device', 'location', 'behavior'] });`,
        },
        {
          title: "Document Verification API",
          text: "Verify authenticity of ID documents like passports and driver’s licenses.",
          code: `// Validate document
const verification = await client.trust
  .documents
  .verify({ file: 'passport.jpg', country: 'US' });`,
        },
      ],
    },
    {
      heading: "Monitoring and Evaluation",
      lists: [
        {
          title: "Trust Metrics",
          items: [
            "Measure user satisfaction (NPS, reviews)",
            "Track repeat engagement and retention rates",
            "Monitor complaint-to-resolution ratios",
          ],
          code: `// Example: Track trust metric
const nps = (promoters - detractors) / totalResponses * 100;
console.log("NPS Score:", nps);`,
        },
        {
          title: "Continuous Improvement",
          items: [
            "Gather feedback regularly",
            "Address trust gaps quickly",
            "Iterate processes to maintain long-term trust",
          ],
          code: `// Example: Feedback loop
function gatherFeedback() {
  return surveyService.collectResponses();
}
setInterval(gatherFeedback, 604800000); // Weekly`,
        },
      ],
    },
  ],
};
