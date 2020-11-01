/**
  * Récupération de la date pour changer son format et le mettre au format français
  * @param  {String} reviewDate
  * @returns  {String} reviewDateFormated
  */
export const formatDate = (reviewDate) => {
  const options = {
    day: 'numeric', month: 'numeric', year: 'numeric',
  };
  const timestamp = Date.parse(reviewDate);
  const timestampToDate = new Date(timestamp);
  const reviewDateFormated = timestampToDate.toLocaleDateString('fr-FR', options);
  return reviewDateFormated;
};

/**
  * Récupération d'un nombre plein et de séparator par rapport au milliers, millions...
  * @param  {number} number
  * @returns  {String} 
  */
export const separatorNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}