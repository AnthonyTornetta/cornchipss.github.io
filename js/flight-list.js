website.addOnLoad(() =>
{
    function nextRdmNot(i, len)
    {
        let rdm = ~~(Math.random() * len);

        while(rdm == i)
            rdm = ~~(Math.random() * len);

        return rdm;
    }

    let flightsList = document.getElementById('flights');

    let airports = ['Baltimore/Washington International Thurgood Marshall Airport (BWI)',
    'LaGuardia Airport (LGA)',
    'Trenton-Mercer Airport (TTL)',
    'Philadelphia International Airport (PHL)',
    'Pittsburgh International Airport (PIT)',
    'Ronald Reagan Washington National (DCA)',
    'Washington Dulles International (IAD)',
    'Yeager Airport (CRW)',
    'John F Kennedy Airport (JFK)',
    'Wilmington Airport (ILG)',
    'Hagerstown Regional Airport (HGR)',
    'Atlantic City International Airport (ACY)',
    'Newark Liberty International Airport (EWR)',
    'Harrisburg International Airport (MDT)'];

    let list = `
    <tr>
        <th>Flight From</th>
        <th>Flight To</th>
        <th>Departure Time</th>
    </tr>`;

    let time = new Date();

    let lastDay = time.getDate();
    
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];

    for(let i = 0; i < 100; i++)
    {
        let mod = time.getHours() % 12;

        let rdm = nextRdmNot(-1, airports.length);

        let format = `${days[time.getDay()]}, ${months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`;

        list += `
    <tr>
        ${ lastDay !== time.getDate() ? 
        (`<td><b>${format}</b></td><td><b>${format}</b></td><td></td></tr><tr>`) 
        : ''}
        <td>${airports[rdm]}</td>
        <td>${airports[nextRdmNot(rdm, airports.length)]}</td>
        <td>${mod === 0 ? 12 : mod}:00 ${time.getHours() / 12 >= 1 ? 'PM' : 'AM'}</td>
    </tr>`;

        lastDay = time.getDate();
        time.setHours(time.getHours() + 1);
    }

    flightsList.innerHTML = list;
});
