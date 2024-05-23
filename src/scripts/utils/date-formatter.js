function FormatDate(date) {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return date.toLocaleDateString('id-ID', options); // Set the locale to Indonesian ('id-ID')
}

export default FormatDate;
