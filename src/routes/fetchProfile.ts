const fetchProfile = async (userId: string) => {
  const baseUrl = import.meta.env.VITE_API_URL || '';
  const response = await fetch(`${baseUrl}/api/user-profile/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch profile");
  return response.json();
};
export default fetchProfile;