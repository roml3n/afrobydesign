export const getRelativeTimeString = (date: Date | string): string => {
  const now = new Date();
  const pastDate = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - pastDate.getTime()) / 1000);

  // Just now (less than a minute)
  if (diffInSeconds < 60) {
    return "just now";
  }

  // Minutes
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  }

  // Hours
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  }

  // Days
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  }

  // Weeks
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks}w ago`;
  }

  // Months (using 28 days as a month)
  const diffInMonths = Math.floor(diffInDays / 28);
  if (diffInMonths < 12) {
    return `${diffInMonths}m ago`;
  }

  // Years
  const diffInYears = Math.floor(diffInMonths / 12);
  return `${diffInYears}y ago`;
};
