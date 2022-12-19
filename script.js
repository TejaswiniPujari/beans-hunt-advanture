function selectTalentTab() {
    document.getElementById('talent-tab').classList.remove('unselect-btn');
    document.getElementById('game-zone-tab').classList.add('unselect-btn');
    document.getElementById('talent-reward').style.display = 'block';
    document.getElementById('game-zone-reward').style.display = 'none';
    document.getElementById('talent-event-gift').style.display = 'block';
    document.getElementById('game-zone-event-gift').style.display = 'none';
    document.getElementById('game-box').style.display = 'none';
}

function selectGameZoneTab() {
    document.getElementById('talent-tab').classList.add('unselect-btn');
    document.getElementById('game-zone-tab').classList.remove('unselect-btn');
    document.getElementById('talent-reward').style.display = 'none';
    document.getElementById('game-zone-reward').style.display = 'block';
    document.getElementById('talent-event-gift').style.display = 'none';
    document.getElementById('game-zone-event-gift').style.display = 'block';
    document.getElementById('game-box').style.display = 'block';
}