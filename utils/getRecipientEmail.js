// Using utility functions, takes an array, taking the user who is logged in and returns the string value of the recipientEmail

const getRecipientEmail = (users, userLoggedIn) => 
    users?.filter((userToFilter) => userToFilter !== userLoggedIn?.email)[0];

export default getRecipientEmail;

