const crowdedSiteInvite = document.querySelectorAll('nav.invite-box a');

crowdedSiteInvite.forEach((elem)=>{
    elem.addEventListener('mouseover', () => {
    const crowdedSiteInviteH3 = elem.querySelector('h3');
    crowdedSiteInviteH3.style.fontSize = '3em';
})});

crowdedSiteInvite.forEach((elem)=>{
    elem.addEventListener('mouseout', () => {
    const crowdedSiteInviteH3 = elem.querySelector('h3');
    crowdedSiteInviteH3.style.fontSize = '2em';
})});

setTimeout(() => {
    const header = document.querySelector('.fixed-header');
    header.style.transform = 'translateY(0)';
}, 5000);