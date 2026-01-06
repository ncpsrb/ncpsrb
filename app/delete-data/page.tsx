export const metadata = {
  title: 'Data Deletion | Robot',
  description: 'User data deletion instructions for Robot',
}

export default function DeleteDataPage() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: '40px auto',
        padding: '0 16px',
        fontFamily:
          'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
        lineHeight: 1.6,
      }}
    >
      <h1>User Data Deletion Instructions for Robot</h1>
      <p>Users may request deletion of their personal data at any time.</p>

      <h2>How to Request Deletion</h2>
      <p>Send an email to:</p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </li>
        <li>
          <strong>Subject:</strong> Data Deletion Request
        </li>
      </ul>

      <p>Please include:</p>
      <ul>
        <li>Your full name</li>
        <li>The email address associated with your account</li>
        <li>A brief request for data deletion</li>
      </ul>

      <h2>Processing Time</h2>
      <p>
        We will process the request within <strong>7 business days</strong> and
        permanently remove related data from our systems, unless we are required
        to retain certain information for legal, security, or compliance
        reasons.
      </p>
    </main>
  )
}
