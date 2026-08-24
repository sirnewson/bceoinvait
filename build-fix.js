const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

const replacements = [
  ['8:15 AM', '7:30 AM'],
  ["You're Invited — Becoming CEO LIVE", "You're Invited | Becoming CEO LIVE"],
  ['<b>Saturday, 12 September</b> — Nairobi.', '<b>Saturday, 12 September</b> in Nairobi.'],
  ['Not the highlight reel — the decisions, the doubt, the years nobody clapped for.', 'Not the highlight reel. The decisions, the doubt, the years nobody clapped for.'],
  ['Just a working class for people who are building something real</span> — and are serious enough', 'Just a working class for people who are building something real</span> and are serious enough'],
  ['stop planning and start building in public — <strong>this is your invitation.</strong>', 'stop planning and start building in public. <strong>This is your invitation.</strong>'],
  ['how your business actually makes money — and where it quietly leaks.', 'how your business actually makes money and where it quietly leaks.'],
  ['You leave with a plan — three moves, dated, and someone in the room who will ask you about them.', 'You leave with a plan: three moves, dated, and someone in the room who will ask you about them.'],
  ['Opening — Why You\'re Here', "Opening: Why You're Here"],
  ['Session One — The Model', 'Session One: The Model'],
  ["Session Two — The Operator's Table", "Session Two: The Operator's Table"],
  ['Get My Ticket — KES 2,500', 'Get My Ticket · KES 2,500'],
  ['Reserve My Seat — KES 2,500', 'Reserve My Seat · KES 2,500'],
  ['SUMMARY:Becoming CEO LIVE — Nairobi', 'SUMMARY:Becoming CEO LIVE, Nairobi']
];

let changed = 0;
for (const [from, to] of replacements) {
  if (html.includes(from)) {
    html = html.split(from).join(to);
    changed += 1;
  }
}

const socialMarker = 'https://www.instagram.com/phil_director/';
if (!html.includes(socialMarker)) {
  const venueLink = '<a href="https://www.google.com/maps/search/?api=1&query=Nairobi+Hospital+Convention+Centre" target="_blank" rel="noopener">Venue</a>';
  const socialLinks = `${venueLink}\n          <a href="https://www.instagram.com/phil_director/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Philip Karanja on Instagram">Instagram</a>\n          <a href="https://m.youtube.com/@OfficialPhilKaranja" target="_blank" rel="noopener noreferrer" aria-label="Philip Karanja on YouTube">YouTube</a>`;
  if (html.includes(venueLink)) {
    html = html.replace(venueLink, socialLinks);
    changed += 1;
  }
}

fs.writeFileSync(file, html);
console.log(`Applied ${changed} site fixes to ${file}.`);
