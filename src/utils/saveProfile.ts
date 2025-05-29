export async function saveProfile(details: {
  userId: string;
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}) {
  const baseUrl = import.meta.env.VITE_API_URL || '';
  const response = await fetch(`${baseUrl}/api/save-profile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(details),
  });

  if (!response.ok) {
    throw new Error('Failed to save profile');
  }

  return response.json();
}

