export const formatDate = (dateString:any) => {
    const optionsDate: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit', year: 'numeric' };
    const optionsTime: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', timeZoneName: 'short' };

    const formattedDate = new Date(dateString).toLocaleDateString('en-US', optionsDate);
    const formattedTime = new Date(dateString).toLocaleTimeString('en-US', optionsTime);

    return `${formattedDate}, ${formattedTime}`;
};