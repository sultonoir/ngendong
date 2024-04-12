export const formatDate = (date: Date) => {
  const now = date;

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const tanggalSekarang = `${year}-${month}-${day}`;
  return {
    year,
    month,
    day,
    tanggalSekarang,
  };
};
