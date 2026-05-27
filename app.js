// Spotify Clone - Core Application Engine

// 1. Tracks Database utilizing Cloudinary High Quality Stream Links
const tracksData = [
    {
        id: 0,
        title: "Headlights (feat. KIDDO)",
        artist: "Alok & Alan Walker",
        album: "Headlights - Single",
        src: "https://res.cloudinary.com/doqs8onra/video/upload/v1779899502/Alok___Alan_Walker_-_Headlights_feat._KIDDO_Official_Lyric_Video_MP3_320K_y5ym5b.mp3",
        cover: "assets/headlights.png",
        duration: "2:38",
        color: "rgb(29, 185, 84)",
        colorRGB: "29, 185, 84",
        lyrics: [
            { time: 0, text: "🎵 [Instrumental Intro]" },
            { time: 5, text: "I can see your headlights in the dark" },
            { time: 10, text: "Driving through the streets of my broken heart" },
            { time: 15, text: "Wondering if we will ever make it back" },
            { time: 20, text: "Or if we are just fading into black" },
            { time: 25, text: "Oh, lights on, we're moving fast" },
            { time: 30, text: "Let's make this neon moment last!" },
            { time: 34, text: "Yeah, headlights guiding us tonight" },
            { time: 39, text: "Every turn we take is feeling right" },
            { time: 44, text: "🎵 [Instrumental EDM Build-up]" },
            { time: 54, text: "💥 [Vibrant Bass Drop]" },
            { time: 70, text: "I can feel the bass line in my chest" },
            { time: 75, text: "With you beside me, I don't care about the rest" },
            { time: 80, text: "Through the valleys and the highway lanes" },
            { time: 85, text: "We are washing off our yesterday's pain" },
            { time: 90, text: "Oh, lights on, we're moving fast" },
            { time: 95, text: "Let's make this neon moment last!" },
            { time: 100, text: "Headlights guiding us tonight" },
            { time: 105, text: "Every turn we take is feeling right" },
            { time: 110, text: "🎵 [Melodic Outro]" },
            { time: 130, text: "Fade out... headlights in the dark 🌌" }
        ]
    },
    {
        id: 1,
        title: "Odnogo (Super Slowed)",
        artist: "Odnogo",
        album: "Odnogo - Super Slowed",
        src: "https://res.cloudinary.com/doqs8onra/video/upload/v1779899502/Odnogo_Super_Slowed_MP3_320K_v0yr9h.mp3",
        cover: "assets/odnogo.png",
        duration: "2:52",
        color: "rgb(103, 58, 183)",
        colorRGB: "103, 58, 183",
        lyrics: [
            { time: 0, text: "🎵 [Deep Lo-fi Ambient Intro]" },
            { time: 12, text: "We are floating in the cosmic sand" },
            { time: 24, text: "Drifting slowly to another land" },
            { time: 36, text: "Odnogo... odnogo super slowed 🌌" },
            { time: 48, text: "Down this lonely stellar road" },
            { time: 60, text: "Hear the echo of a distant star" },
            { time: 72, text: "Wondering who we really are" },
            { time: 84, text: "🎵 [Deep Atmospheric Bridge]" },
            { time: 108, text: "Time is bending under heavy bass" },
            { time: 120, text: "Lost in the infinite cosmic space" },
            { time: 132, text: "Odnogo... hold on to my hand" },
            { time: 144, text: "We will land in the golden sand" },
            { time: 156, text: "🎵 [Peaceful Ambient Outro]" }
        ]
    },
    {
        id: 2,
        title: "GATA ONLY REMIX",
        artist: "FloyyMenor, Anitta, Ozuna",
        album: "GATA ONLY (Remix) - Single",
        src: "https://res.cloudinary.com/doqs8onra/video/upload/v1779899499/FloyyMenor__Anitta__Ozuna_-_GATA_ONLY_REMIX_Audio_Oficial_MP3_320K_mhgjm5.mp3",
        cover: "assets/gata_only.png",
        duration: "3:46",
        color: "rgb(233, 30, 99)",
        colorRGB: "233, 30, 99",
        lyrics: [
            { time: 0, text: "🎵 [Reggaeton Heavy Beats Intro]" },
            { time: 7, text: "Mami te ves hermosa con ese outfit 🔥" },
            { time: 12, text: "FloyyMenor, Anitta, Ozuna remix hit" },
            { time: 18, text: "Tú eres mi gata, la única que quiero" },
            { time: 24, text: "Por ti yo cruzo el planeta entero" },
            { time: 29, text: "Baby tú eres gata only..." },
            { time: 34, text: "No me dejes solo, no me dejes lonely 💔" },
            { time: 39, text: "Baila lento en la discoteca" },
            { time: 44, text: "Que este ritmo caliente ya calienta la pista" },
            { time: 50, text: "🎵 [Anitta Verse - Sweet Vocal]" },
            { time: 60, text: "Yo sé lo que buscas cuando me miras así" },
            { time: 65, text: "Un gatito de verdad que pelee por mí" },
            { time: 70, text: "Bailando apretados contra la pared" },
            { time: 75, text: "Ozuna con Anitta, haciéndote perder la sed" },
            { time: 80, text: "🎵 [Ozuna Verse - Hype Melodic Vocal]" },
            { time: 92, text: "El negrito de ojos claros te canta otra vez" },
            { time: 98, text: "Remix oficial, bailándolo al revés" },
            { time: 104, text: "Tú eres gata only, mami no digas que no" },
            { time: 110, text: "Que la química en la pista ya nos encendió 💥" },
            { time: 120, text: "🎵 [Chorus Repeat & Heavy Dance Beat]" }
        ]
    },
    {
        id: 3,
        title: "MY TYPE (Ultra Slowed)",
        artist: "MY TYPE",
        album: "MY TYPE (Slowed Album)",
        src: "https://res.cloudinary.com/doqs8onra/video/upload/v1779899462/MY_TYPE_Ultra_Slowed_MP3_320K_xure8h.mp3",
        cover: "assets/my_type.png",
        duration: "2:08",
        color: "rgb(255, 110, 64)",
        colorRGB: "255, 110, 64",
        lyrics: [
            { time: 0, text: "🎵 [Retro Synthwave Intro]" },
            { time: 10, text: "You are exactly my type 💕" },
            { time: 20, text: "Under the sunset neon light" },
            { time: 30, text: "Dreaming of you every single night" },
            { time: 40, text: "VHS tape memories feeling so right" },
            { time: 50, text: "Slowed down feelings, synthwave sunset 🌅" },
            { time: 60, text: "A retro romance I will never forget" },
            { time: 70, text: "🎵 [Cosy Lofi Solo Beat]" },
            { time: 90, text: "Yeah, you are exactly my type" },
            { time: 100, text: "No more waiting, let's fly into the night" },
            { time: 110, text: "My type, ultra slowed..." },
            { time: 120, text: "🎵 [Warm Synth Wave Outro]" }
        ]
    }
];

// 2. Global State Management
let currentTrackIndex = 0;
let isPlaying = false;
let shuffleActive = false;
let repeatMode = 'none'; // 'none' | 'all' | 'one'
let likedSongs = new Set(); // Stores song IDs
let customPlaylists = []; // Array of { id, name, songs: [ids] }
let audioQueue = [...tracksData]; // Playback queue
let originalQueue = [...tracksData]; // For shuffle backup
let activePlaylistId = 'all'; // 'all' | 'liked' | number (for custom)
let activeView = 'home'; // 'home' | 'search' | 'playlist-detail'
let viewHistory = ['home'];
let historyIndex = 0;

// Right Panel State
let rightPanelActive = false;
let rightPanelMode = 'lyrics'; // 'lyrics' | 'queue'

// Audio Object initialization
const audio = new Audio();
audio.volume = 0.7; // default 70%

// 3. Document Elements Cache
const el = {
    body: document.body,
    greetingText: document.getElementById('greeting-text'),
    dynamicGlow: document.getElementById('dynamic-glow'),
    scrollContainer: document.getElementById('scroll-container'),
    mainHeader: document.getElementById('main-header'),
    mainContent: document.querySelector('.main-content'),
    
    // View containers
    viewHome: document.getElementById('view-home'),
    viewSearch: document.getElementById('view-search'),
    viewPlaylistDetail: document.getElementById('view-playlist-detail'),
    
    // Navigation Buttons
    navBackBtn: document.getElementById('nav-back-btn'),
    navForwardBtn: document.getElementById('nav-forward-btn'),
    logoHomeTrigger: document.getElementById('logo-home-trigger'),
    navHome: document.getElementById('nav-home'),
    navSearch: document.getElementById('nav-search'),
    navLibrary: document.getElementById('nav-library'),
    createPlaylistBtn: document.getElementById('create-playlist-btn'),
    sidebarPlaylistsList: document.getElementById('sidebar-playlists-list'),
    likedSongsPlaylistItem: document.getElementById('liked-songs-playlist-item'),
    sidebarLikedCount: document.getElementById('sidebar-liked-count'),
    
    // Search elements
    searchInputField: document.getElementById('search-input-field'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    searchGenresGrid: document.getElementById('search-genres-grid'),
    searchResultsSection: document.getElementById('search-results-section'),
    searchResultsTableBody: document.getElementById('search-results-table-body'),
    searchTitleHeader: document.getElementById('search-title-header'),
    
    // Playlist Details elements
    playlistHeroGlow: document.getElementById('playlist-hero-glow'),
    playlistDetailImg: document.getElementById('playlist-detail-img'),
    playlistDetailSvg: document.getElementById('playlist-detail-svg'),
    playlistDetailArtBox: document.getElementById('playlist-detail-art-box'),
    playlistDetailName: document.getElementById('playlist-detail-name'),
    playlistDetailOwner: document.getElementById('playlist-detail-owner'),
    playlistDetailCount: document.getElementById('playlist-detail-count'),
    playlistDetailTableBody: document.getElementById('playlist-detail-table-body'),
    playlistActionPlayBtn: document.getElementById('playlist-action-play-btn'),
    playlistActionPlaySvg: document.getElementById('playlist-action-play-svg'),
    playlistActionLikeBtn: document.getElementById('playlist-action-like-btn'),
    playlistActionOptionsBtn: document.getElementById('playlist-action-options-btn'),
    
    // Right Panel Elements
    rightPanelDrawer: document.getElementById('right-panel-drawer'),
    rightPanelTitle: document.getElementById('right-panel-title'),
    rightPanelCloseBtn: document.getElementById('right-panel-close-btn'),
    lyricsContainerView: document.getElementById('lyrics-container-view'),
    queueContainerView: document.getElementById('queue-container-view'),
    lyricsGradientGlow: document.getElementById('lyrics-gradient-glow'),
    queueNowPlayingList: document.getElementById('queue-now-playing-list'),
    queueNextUpList: document.getElementById('queue-next-up-list'),
    
    // Footer Controls Elements
    playerTrackArt: document.getElementById('player-track-art'),
    playerTrackTitle: document.getElementById('player-track-title'),
    playerTrackArtist: document.getElementById('player-track-artist'),
    playerHeartBtn: document.getElementById('player-heart-btn'),
    
    ctrlShuffle: document.getElementById('ctrl-shuffle'),
    ctrlPrev: document.getElementById('ctrl-prev'),
    ctrlPlayPause: document.getElementById('ctrl-play-pause'),
    playPauseIcon: document.getElementById('play-pause-icon'),
    ctrlNext: document.getElementById('ctrl-next'),
    ctrlRepeat: document.getElementById('ctrl-repeat'),
    
    progressSlider: document.getElementById('progress-slider'),
    progressSliderFill: document.getElementById('progress-slider-fill'),
    progressSliderThumb: document.getElementById('progress-slider-thumb'),
    progressTimeCurrent: document.getElementById('progress-time-current'),
    progressTimeDuration: document.getElementById('progress-time-duration'),
    
    utilLyrics: document.getElementById('util-lyrics'),
    utilQueue: document.getElementById('util-queue'),
    utilVolumeToggle: document.getElementById('util-volume-toggle'),
    volumeIcon: document.getElementById('volume-icon'),
    volumeSlider: document.getElementById('volume-slider'),
    volumeSliderFill: document.getElementById('volume-slider-fill'),
    volumeSliderThumb: document.getElementById('volume-slider-thumb'),
    
    // Context Menu & Modal overlays
    customContextMenu: document.getElementById('custom-context-menu'),
    ctxAddToLiked: document.getElementById('ctx-add-to-liked'),
    ctxAddToQueue: document.getElementById('ctx-add-to-queue'),
    ctxPlaylistsSubmenu: document.getElementById('ctx-playlists-submenu'),
    playlistModal: document.getElementById('playlist-modal'),
    playlistNameInput: document.getElementById('playlist-name-input'),
    playlistModalCancel: document.getElementById('playlist-modal-cancel'),
    playlistModalSave: document.getElementById('playlist-modal-save'),
    modalPlaylistTitle: document.getElementById('modal-playlist-title')
};

// 4. Initialize Application
function initApp() {
    setGreeting();
    loadPlaylistsFromStorage();
    renderSidebarPlaylists();
    
    // Load first track into player bar
    loadTrack(currentTrackIndex, false);
    
    // Bind Event Listeners
    setupNavListeners();
    setupAudioListeners();
    setupPlayerControls();
    setupCustomSliders();
    setupModalListeners();
    setupContextMenuListeners();
    setupKeyboardHotkeys();
    
    // Home click actions on cards
    setupHomeClickListeners();
    
    // Scroll header styling listener
    el.scrollContainer.addEventListener('scroll', () => {
        if (el.scrollContainer.scrollTop > 50) {
            el.mainHeader.classList.add('scrolled');
        } else {
            el.mainHeader.classList.remove('scrolled');
        }
    });

    console.log("Spotify Clone Core engine loaded successfully.");
}

// 5. Greeting Helper
function setGreeting() {
    const hours = new Date().getHours();
    let text = "Good evening";
    if (hours < 12) text = "Good morning";
    else if (hours < 18) text = "Good afternoon";
    el.greetingText.textContent = text;
}

// 6. View Router & History
function navigateToView(viewName, playlistId = null) {
    // Prevent duplicated navigation history
    const currentHist = viewHistory[historyIndex];
    const targetHist = viewName + (playlistId ? `:${playlistId}` : '');
    
    if (currentHist !== targetHist) {
        // truncate forward history
        viewHistory = viewHistory.slice(0, historyIndex + 1);
        viewHistory.push(targetHist);
        historyIndex = viewHistory.length - 1;
    }
    
    updateNavButtons();
    applyViewTransition(viewName, playlistId);
}

function updateNavButtons() {
    if (historyIndex > 0) {
        el.navBackBtn.classList.remove('disabled');
    } else {
        el.navBackBtn.classList.add('disabled');
    }
    
    if (historyIndex < viewHistory.length - 1) {
        el.navForwardBtn.classList.remove('disabled');
    } else {
        el.navForwardBtn.classList.add('disabled');
    }
}

function applyViewTransition(viewName, playlistId = null) {
    activeView = viewName;
    el.mainContent.setAttribute('data-view', viewName);
    
    // Remove active styles on all nav items
    el.navHome.classList.remove('active');
    el.navSearch.classList.remove('active');
    el.likedSongsPlaylistItem.classList.remove('active');
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    
    // Hide all views
    el.viewHome.classList.remove('active');
    el.viewSearch.classList.remove('active');
    el.viewPlaylistDetail.classList.remove('active');
    
    if (viewName === 'home') {
        el.navHome.classList.add('active');
        el.viewHome.classList.add('active');
        // Reset dynamic body glow to currently active playing song color
        updateDynamicGlow(tracksData[currentTrackIndex].colorRGB);
    } 
    else if (viewName === 'search') {
        el.navSearch.classList.add('active');
        el.viewSearch.classList.add('active');
        updateDynamicGlow("83, 83, 83"); // neutral gray
        el.searchInputField.focus();
    } 
    else if (viewName === 'playlist-detail') {
        el.viewPlaylistDetail.classList.add('active');
        activePlaylistId = playlistId;
        renderPlaylistDetails(playlistId);
    }
    
    // Scroll back to top
    el.scrollContainer.scrollTop = 0;
}

// Nav back / forward handlers
el.navBackBtn.addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        updateNavButtons();
        const state = viewHistory[historyIndex].split(':');
        applyViewTransition(state[0], state[1] || null);
    }
});

el.navForwardBtn.addEventListener('click', () => {
    if (historyIndex < viewHistory.length - 1) {
        historyIndex++;
        updateNavButtons();
        const state = viewHistory[historyIndex].split(':');
        applyViewTransition(state[0], state[1] || null);
    }
});

// Setup sidebar/menu view triggers
function setupNavListeners() {
    el.logoHomeTrigger.addEventListener('click', () => navigateToView('home'));
    el.navHome.addEventListener('click', () => navigateToView('home'));
    el.navSearch.addEventListener('click', () => navigateToView('search'));
    el.navLibrary.addEventListener('click', () => navigateToView('playlist-detail', 'all'));
    
    el.likedSongsPlaylistItem.addEventListener('click', () => {
        navigateToView('playlist-detail', 'liked');
    });
    
    // Create Playlist triggers modal
    el.createPlaylistBtn.addEventListener('click', () => {
        openPlaylistModal(false); // False means create mode
    });
    
    // Realtime search bar filter
    el.searchInputField.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length > 0) {
            el.searchClearBtn.classList.add('visible');
            el.searchGenresGrid.style.display = 'none';
            el.searchResultsSection.classList.add('active');
            el.searchTitleHeader.textContent = `Search results for "${query}"`;
            performSearch(query);
        } else {
            el.searchClearBtn.classList.remove('visible');
            el.searchGenresGrid.style.display = 'grid';
            el.searchResultsSection.classList.remove('active');
            el.searchTitleHeader.textContent = "Browse all";
            el.searchResultsTableBody.innerHTML = '';
        }
    });
    
    el.searchClearBtn.addEventListener('click', () => {
        el.searchInputField.value = '';
        el.searchClearBtn.classList.remove('visible');
        el.searchGenresGrid.style.display = 'grid';
        el.searchResultsSection.classList.remove('active');
        el.searchTitleHeader.textContent = "Browse all";
        el.searchResultsTableBody.innerHTML = '';
        el.searchInputField.focus();
    });
}

// 7. Dynamic Glow styling helper
function updateDynamicGlow(colorRGB) {
    el.dynamicGlow.style.background = `linear-gradient(180deg, rgba(${colorRGB}, 0.35) 0%, rgba(18, 18, 18, 0) 100%)`;
    el.body.style.setProperty('--theme-color-rgb', colorRGB);
    
    // Also adjust details hero BG glow if in playlist detail view
    const mainGlowEl = document.getElementById('playlist-hero-glow');
    if (mainGlowEl) {
        mainGlowEl.style.background = `linear-gradient(180deg, rgb(${colorRGB}) 0%, rgba(18,18,18,0.85) 100%)`;
    }
}

// 8. Playlist detail view rendering
function renderPlaylistDetails(playlistId) {
    let title = "All Songs";
    let coverSrc = "assets/headlights.png";
    let owner = "Spotify Clone";
    let songsToRender = [];
    let isLikedView = false;
    let customPlaylistObj = null;

    // Reset layout attributes
    el.playlistDetailImg.style.display = 'block';
    el.playlistDetailSvg.style.display = 'none';
    el.playlistDetailArtBox.className = 'playlist-art details-art';

    if (playlistId === 'all') {
        songsToRender = tracksData;
        title = "All Songs";
        coverSrc = "assets/headlights.png"; // cover of first song
        owner = "Spotify Web Player";
        
        // Highlight active element in library
        document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active'));
    } 
    else if (playlistId === 'liked') {
        songsToRender = tracksData.filter(s => likedSongs.has(s.id));
        title = "Liked Songs";
        coverSrc = "";
        isLikedView = true;
        owner = "Spotify User";
        
        el.playlistDetailImg.style.display = 'none';
        el.playlistDetailSvg.style.display = 'block';
        el.playlistDetailArtBox.className = 'playlist-art details-art liked-art-gradient';
        
        el.likedSongsPlaylistItem.classList.add('active');
    } 
    else {
        // Custom playlist
        const pId = parseInt(playlistId);
        customPlaylistObj = customPlaylists.find(p => p.id === pId);
        if (customPlaylistObj) {
            title = customPlaylistObj.name;
            owner = "Spotify User";
            songsToRender = tracksData.filter(s => customPlaylistObj.songs.includes(s.id));
            
            if (songsToRender.length > 0) {
                coverSrc = songsToRender[0].cover;
            } else {
                coverSrc = "";
                el.playlistDetailImg.style.display = 'none';
                el.playlistDetailSvg.style.display = 'block';
            }
            
            // Highlight list item
            const sidebarItem = document.querySelector(`.playlist-item[data-playlist-id="${pId}"]`);
            if (sidebarItem) sidebarItem.classList.add('active');
        } else {
            // fallback
            navigateToView('home');
            return;
        }
    }

    // Render metadata
    el.playlistDetailName.textContent = title;
    if (coverSrc) el.playlistDetailImg.src = coverSrc;
    el.playlistDetailOwner.textContent = owner;
    el.playlistDetailCount.textContent = `${songsToRender.length} ${songsToRender.length === 1 ? 'song' : 'songs'}`;

    // Color gradient theme setup
    let themeRGB = "83, 83, 83"; // default neutral
    if (songsToRender.length > 0) {
        themeRGB = songsToRender[0].colorRGB;
    }
    updateDynamicGlow(themeRGB);

    // Populate songs table
    const tableBody = el.playlistDetailTableBody;
    tableBody.innerHTML = '';

    if (songsToRender.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; padding: 48px 0; color: var(--text-secondary);">
                    No songs in this playlist yet. Add songs by right-clicking on Home or Search views!
                </td>
            </tr>
        `;
        return;
    }

    songsToRender.forEach((song, index) => {
        const isSongActive = (currentTrackIndex === song.id);
        const tr = document.createElement('tr');
        tr.className = `song-row ${isSongActive ? 'active' : ''}`;
        tr.setAttribute('data-track-id', song.id);
        tr.setAttribute('data-render-index', index);
        
        const isHeartActive = likedSongs.has(song.id) ? 'active' : '';

        tr.innerHTML = `
            <td class="num-col">
                <span class="row-track-num">${index + 1}</span>
                <span class="row-play-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </span>
                <div class="row-equalizer">
                    <div class="eq-bar eq-bar-1"></div>
                    <div class="eq-bar eq-bar-2"></div>
                    <div class="eq-bar eq-bar-3"></div>
                    <div class="eq-bar eq-bar-4"></div>
                </div>
            </td>
            <td class="title-col">
                <img class="song-row-art" src="${song.cover}" alt="Album Art">
                <div class="song-title-info">
                    <div class="song-title-text">${song.title}</div>
                    <div class="song-artist-text">${song.artist}</div>
                </div>
            </td>
            <td class="song-album-text">${song.album}</td>
            <td class="time-col">
                <div class="time-col-content">
                    <button class="row-heart-btn ${isHeartActive}" data-track-id="${song.id}" title="Like song">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <span>${song.duration}</span>
                    <button class="row-options-btn" data-track-id="${song.id}" title="More options">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="19" cy="12" r="1.5"></circle>
                            <circle cx="5" cy="12" r="1.5"></circle>
                        </svg>
                    </button>
                </div>
            </td>
        `;

        // Row Double click to play
        tr.addEventListener('dblclick', () => {
            // Establish the active playlist context as the audio playback queue!
            setPlaybackQueue(songsToRender, song.id);
        });

        // Click play button icon to play immediately
        tr.querySelector('.row-play-icon').addEventListener('click', (e) => {
            e.stopPropagation();
            setPlaybackQueue(songsToRender, song.id);
        });

        // Like button toggle
        tr.querySelector('.row-heart-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLikeTrack(song.id);
        });

        // Options trigger context menu
        tr.querySelector('.row-options-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const rect = e.target.getBoundingClientRect();
            openContextMenu(e, song.id, rect.left, rect.bottom + 5);
        });

        // Standard context menu on right click
        tr.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            openContextMenu(e, song.id, e.clientX, e.clientY);
        });

        tableBody.appendChild(tr);
    });

    // Check if the current queue matches this playlist, updating playing icon states
    updateActionPlayButtonState(songsToRender);
}

// 9. Update the playlist hero header play/pause buttons
function updateActionPlayButtonState(playlistSongs) {
    const isThisPlaylistPlaying = playlistSongs.length > 0 &&
        audioQueue.length === playlistSongs.length &&
        audioQueue.every((val, i) => val.id === playlistSongs[i].id);

    if (isThisPlaylistPlaying && isPlaying) {
        el.playlistActionPlaySvg.innerHTML = `
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        `;
        el.playlistActionPlayBtn.title = "Pause";
    } else {
        el.playlistActionPlaySvg.innerHTML = `
            <path d="M8 5v14l11-7z"/>
        `;
        el.playlistActionPlayBtn.title = "Play";
    }

    // Bind action play button click
    el.playlistActionPlayBtn.onclick = () => {
        if (playlistSongs.length === 0) return;
        
        if (isThisPlaylistPlaying) {
            togglePlayPause();
        } else {
            setPlaybackQueue(playlistSongs, playlistSongs[0].id);
        }
        updateActionPlayButtonState(playlistSongs);
    };

    // Bind playlist like/delete button depending on custom state
    if (activePlaylistId === 'all') {
        el.playlistActionLikeBtn.style.display = 'none';
        el.playlistActionOptionsBtn.style.display = 'none';
    } else if (activePlaylistId === 'liked') {
        el.playlistActionLikeBtn.style.display = 'none';
        el.playlistActionOptionsBtn.style.display = 'none';
    } else {
        el.playlistActionLikeBtn.style.display = 'flex';
        el.playlistActionOptionsBtn.style.display = 'flex';
        
        const pId = parseInt(activePlaylistId);
        // Rename/Delete bindings
        el.playlistActionOptionsBtn.onclick = (e) => {
            e.stopPropagation();
            const rect = el.playlistActionOptionsBtn.getBoundingClientRect();
            // Show custom context menu for playlist actions
            openPlaylistOptionsContextMenu(e, pId, rect.left, rect.bottom + 5);
        };
    }
}

// Set playback queue dynamically
function setPlaybackQueue(songsList, startTrackId) {
    audioQueue = [...songsList];
    originalQueue = [...songsList];
    shuffleActive = false;
    el.ctrlShuffle.classList.remove('active');
    
    const trackIdx = audioQueue.findIndex(s => s.id === startTrackId);
    loadTrack(trackIdx >= 0 ? trackIdx : 0, true);
}

// 10. Search Logic
function performSearch(query) {
    const matches = tracksData.filter(s => 
        s.title.toLowerCase().includes(query) || 
        s.artist.toLowerCase().includes(query) || 
        s.album.toLowerCase().includes(query)
    );

    const tbody = el.searchResultsTableBody;
    tbody.innerHTML = '';

    if (matches.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center; padding: 32px 0; color: var(--text-secondary);">
                    No matches found for your search query. Try another term.
                </td>
            </tr>
        `;
        return;
    }

    matches.forEach((song, index) => {
        const isSongActive = (currentTrackIndex === song.id);
        const tr = document.createElement('tr');
        tr.className = `song-row ${isSongActive ? 'active' : ''}`;
        tr.setAttribute('data-track-id', song.id);
        
        const isHeartActive = likedSongs.has(song.id) ? 'active' : '';

        tr.innerHTML = `
            <td class="num-col">
                <span class="row-track-num">${index + 1}</span>
                <span class="row-play-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </span>
                <div class="row-equalizer">
                    <div class="eq-bar eq-bar-1"></div>
                    <div class="eq-bar eq-bar-2"></div>
                    <div class="eq-bar eq-bar-3"></div>
                    <div class="eq-bar eq-bar-4"></div>
                </div>
            </td>
            <td class="title-col">
                <img class="song-row-art" src="${song.cover}" alt="Album Art">
                <div class="song-title-info">
                    <div class="song-title-text">${song.title}</div>
                    <div class="song-artist-text">${song.artist}</div>
                </div>
            </td>
            <td class="song-album-text">${song.album}</td>
            <td class="time-col">
                <div class="time-col-content">
                    <button class="row-heart-btn ${isHeartActive}" data-track-id="${song.id}" title="Like song">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <span>${song.duration}</span>
                    <button class="row-options-btn" data-track-id="${song.id}" title="More options">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="19" cy="12" r="1.5"></circle>
                            <circle cx="5" cy="12" r="1.5"></circle>
                        </svg>
                    </button>
                </div>
            </td>
        `;

        tr.addEventListener('dblclick', () => {
            setPlaybackQueue(matches, song.id);
        });

        tr.querySelector('.row-play-icon').addEventListener('click', (e) => {
            e.stopPropagation();
            setPlaybackQueue(matches, song.id);
        });

        tr.querySelector('.row-heart-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLikeTrack(song.id);
            tr.querySelector('.row-heart-btn').classList.toggle('active');
        });

        tr.querySelector('.row-options-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const rect = e.target.getBoundingClientRect();
            openContextMenu(e, song.id, rect.left, rect.bottom + 5);
        });

        tr.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            openContextMenu(e, song.id, e.clientX, e.clientY);
        });

        tbody.appendChild(tr);
    });
}

// 11. Custom Playlists Management
function loadPlaylistsFromStorage() {
    const saved = localStorage.getItem('spotify_playlists');
    if (saved) {
        customPlaylists = JSON.parse(saved);
    } else {
        // default empty
        customPlaylists = [];
    }

    const savedLikes = localStorage.getItem('spotify_liked_songs');
    if (savedLikes) {
        likedSongs = new Set(JSON.parse(savedLikes));
    } else {
        likedSongs = new Set();
    }
    el.sidebarLikedCount.textContent = likedSongs.size;
}

function savePlaylistsToStorage() {
    localStorage.setItem('spotify_playlists', JSON.stringify(customPlaylists));
    localStorage.setItem('spotify_liked_songs', JSON.stringify(Array.from(likedSongs)));
    el.sidebarLikedCount.textContent = likedSongs.size;
}

function renderSidebarPlaylists() {
    // Keep liked songs playlist, clear other sidebar lists
    const children = Array.from(el.sidebarPlaylistsList.children);
    children.forEach(child => {
        if (child.id !== 'liked-songs-playlist-item') {
            el.sidebarPlaylistsList.removeChild(child);
        }
    });

    customPlaylists.forEach(playlist => {
        const div = document.createElement('div');
        div.className = `playlist-item ${activePlaylistId === playlist.id ? 'active' : ''}`;
        div.setAttribute('data-playlist-id', playlist.id);
        
        div.innerHTML = `
            <div class="playlist-art">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z"/>
                </svg>
            </div>
            <div class="playlist-info">
                <div class="playlist-name">${escapeHTML(playlist.name)}</div>
                <div class="playlist-details">Playlist • ${playlist.songs.length} ${playlist.songs.length === 1 ? 'song' : 'songs'}</div>
            </div>
        `;

        div.addEventListener('click', () => {
            navigateToView('playlist-detail', playlist.id);
        });

        el.sidebarPlaylistsList.appendChild(div);
    });
}

function openPlaylistModal(isEdit = false, playlistId = null) {
    el.playlistModal.classList.add('active');
    
    if (isEdit) {
        const pObj = customPlaylists.find(p => p.id === playlistId);
        el.modalPlaylistTitle.textContent = "Edit Playlist Name";
        el.playlistNameInput.value = pObj ? pObj.name : "";
        el.playlistModalSave.textContent = "Save";
        
        el.playlistModalSave.onclick = () => {
            const val = el.playlistNameInput.value.trim();
            if (val.length > 0) {
                pObj.name = val;
                savePlaylistsToStorage();
                renderSidebarPlaylists();
                if (activePlaylistId == playlistId) {
                    el.playlistDetailName.textContent = val;
                }
                closePlaylistModal();
            }
        };
    } else {
        el.modalPlaylistTitle.textContent = "Create Playlist";
        el.playlistNameInput.value = `My Playlist #${customPlaylists.length + 1}`;
        el.playlistModalSave.textContent = "Create";
        
        el.playlistModalSave.onclick = () => {
            const val = el.playlistNameInput.value.trim();
            if (val.length > 0) {
                const newPlaylist = {
                    id: Date.now(),
                    name: val,
                    songs: []
                };
                customPlaylists.push(newPlaylist);
                savePlaylistsToStorage();
                renderSidebarPlaylists();
                closePlaylistModal();
                // Navigate straight to the empty playlist!
                navigateToView('playlist-detail', newPlaylist.id);
            }
        };
    }
}

function closePlaylistModal() {
    el.playlistModal.classList.remove('active');
}

function setupModalListeners() {
    el.playlistModalCancel.addEventListener('click', closePlaylistModal);
    
    // Close modal on click outside card
    el.playlistModal.addEventListener('click', (e) => {
        if (e.target === el.playlistModal) {
            closePlaylistModal();
        }
    });
}

// Helper to escape HTML to prevent XSS
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// 12. Audio Engine Engine Controllers
function loadTrack(index, playAfterLoad = false) {
    if (audioQueue.length === 0) return;
    
    // Safety boundary checks
    if (index < 0) index = 0;
    if (index >= audioQueue.length) index = audioQueue.length - 1;
    
    currentTrackIndex = audioQueue[index].id;
    const song = tracksData.find(s => s.id === currentTrackIndex);
    
    // Update player footer components
    el.playerTrackArt.src = song.cover;
    el.playerTrackTitle.textContent = song.title;
    el.playerTrackArtist.textContent = song.artist;
    
    // Set liked state heart
    if (likedSongs.has(song.id)) {
        el.playerHeartBtn.classList.add('active');
    } else {
        el.playerHeartBtn.classList.remove('active');
    }
    
    // Configure HTML5 audio details
    audio.src = song.src;
    audio.load();
    
    // Set default visual durations
    el.progressTimeCurrent.textContent = "0:00";
    el.progressTimeDuration.textContent = song.duration;
    
    // Update theme background glows
    if (activeView === 'home') {
        updateDynamicGlow(song.colorRGB);
    }
    
    // Re-highlight playing rows in active lists
    updateRowHighlightState();
    
    // Lyrics loading
    loadLyrics(song);
    
    // If Drawer Queue view is open, refresh queue details
    if (rightPanelActive && rightPanelMode === 'queue') {
        renderDrawerQueue();
    }
    
    if (playAfterLoad) {
        playAudio();
    }
}

function updateRowHighlightState() {
    // Remove active state on all table rows
    document.querySelectorAll('.song-row').forEach(row => {
        const rowId = parseInt(row.getAttribute('data-track-id'));
        if (rowId === currentTrackIndex) {
            row.classList.add('active');
        } else {
            row.classList.remove('active');
        }
    });
    
    // Quick cards home grid highlight active check
    document.querySelectorAll('.quick-card').forEach(card => {
        const cId = parseInt(card.getAttribute('data-track-id'));
        if (cId === currentTrackIndex) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function playAudio() {
    isPlaying = true;
    audio.play().then(() => {
        el.body.classList.remove('paused');
        el.playPauseIcon.innerHTML = `
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        `;
        el.ctrlPlayPause.title = "Pause";
        
        // Update playlist actions play button state if playing it
        if (activeView === 'playlist-detail') {
            const tableRows = Array.from(el.playlistDetailTableBody.querySelectorAll('.song-row'));
            const playlistSongs = tableRows.map(row => tracksData.find(s => s.id === parseInt(row.getAttribute('data-track-id'))));
            updateActionPlayButtonState(playlistSongs);
        }
    }).catch(err => {
        console.error("Audio playback interrupted/blocked:", err);
        pauseAudio();
    });
}

function pauseAudio() {
    isPlaying = false;
    audio.pause();
    el.body.classList.add('paused');
    el.playPauseIcon.innerHTML = `
        <path d="M8 5v14l11-7z"/>
    `;
    el.ctrlPlayPause.title = "Play";
    
    // Update playlist detail button
    if (activeView === 'playlist-detail') {
        const tableRows = Array.from(el.playlistDetailTableBody.querySelectorAll('.song-row'));
        const playlistSongs = tableRows.map(row => tracksData.find(s => s.id === parseInt(row.getAttribute('data-track-id'))));
        updateActionPlayButtonState(playlistSongs);
    }
}

function togglePlayPause() {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

function prevTrack() {
    let qIdx = audioQueue.findIndex(s => s.id === currentTrackIndex);
    if (qIdx > 0) {
        qIdx--;
        loadTrack(qIdx, true);
    } else if (repeatMode === 'all') {
        loadTrack(audioQueue.length - 1, true); // wrap
    } else {
        // seek back to 0
        audio.currentTime = 0;
    }
}

function nextTrack() {
    let qIdx = audioQueue.findIndex(s => s.id === currentTrackIndex);
    if (qIdx < audioQueue.length - 1) {
        qIdx++;
        loadTrack(qIdx, true);
    } else if (repeatMode === 'all') {
        loadTrack(0, true); // wrap
    } else {
        pauseAudio();
    }
}

// 13. Audio Listeners & Sliders sync
function setupAudioListeners() {
    // Duration change check
    audio.addEventListener('durationchange', () => {
        el.progressTimeDuration.textContent = formatTime(audio.duration);
    });
    
    // Progress Bar ticks
    audio.addEventListener('timeupdate', () => {
        if (!isDraggingProgress) {
            const current = audio.currentTime;
            const duration = audio.duration || 0;
            const pct = duration > 0 ? (current / duration) * 100 : 0;
            
            el.progressSliderFill.style.width = `${pct}%`;
            el.progressSliderThumb.style.left = `${pct}%`;
            el.progressTimeCurrent.textContent = formatTime(current);
            
            // Synchronize scrolling lyrics highlight
            syncLyricsHighlight(current);
        }
    });
    
    // End of track logic
    audio.addEventListener('ended', () => {
        if (repeatMode === 'one') {
            audio.currentTime = 0;
            playAudio();
        } else {
            nextTrack();
        }
    });
}

function formatTime(secs) {
    if (isNaN(secs)) return "0:00";
    const mins = Math.floor(secs / 60);
    const remain = Math.floor(secs % 60);
    return `${mins}:${remain < 10 ? '0' : ''}${remain}`;
}

// 14. Drag Sliders Handlers
let isDraggingProgress = false;
let isDraggingVolume = false;

function setupCustomSliders() {
    // Interactive timeline seeks
    el.progressSlider.addEventListener('mousedown', (e) => {
        isDraggingProgress = true;
        seekProgress(e);
        
        document.addEventListener('mousemove', seekProgress);
        document.addEventListener('mouseup', () => {
            if (isDraggingProgress) {
                isDraggingProgress = false;
                document.removeEventListener('mousemove', seekProgress);
            }
        }, { once: true });
    });
    
    // Interactive Volume slider drag setup
    el.volumeSlider.addEventListener('mousedown', (e) => {
        isDraggingVolume = true;
        adjustVolume(e);
        
        document.addEventListener('mousemove', adjustVolume);
        document.addEventListener('mouseup', () => {
            if (isDraggingVolume) {
                isDraggingVolume = false;
                document.removeEventListener('mousemove', adjustVolume);
            }
        }, { once: true });
    });
    
    // Touch inputs support for mobile
    el.progressSlider.addEventListener('touchstart', (e) => {
        isDraggingProgress = true;
        seekProgress(e.touches[0]);
    }, { passive: true });
    
    el.progressSlider.addEventListener('touchmove', (e) => {
        if (isDraggingProgress) seekProgress(e.touches[0]);
    }, { passive: true });
    
    el.progressSlider.addEventListener('touchend', () => {
        isDraggingProgress = false;
    });

    // Mute/unmute trigger
    el.utilVolumeToggle.addEventListener('click', toggleMute);
}

function seekProgress(e) {
    const rect = el.progressSlider.getBoundingClientRect();
    let pct = (e.clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    
    el.progressSliderFill.style.width = `${pct * 100}%`;
    el.progressSliderThumb.style.left = `${pct * 100}%`;
    
    const duration = audio.duration || 0;
    el.progressTimeCurrent.textContent = formatTime(pct * duration);
    
    if (!isDraggingProgress) {
        audio.currentTime = pct * duration;
    } else {
        // Dragging triggers update on timeline slider values but delays final audio seek to mouseup
        const mouseUpSeek = () => {
            audio.currentTime = pct * duration;
            document.removeEventListener('mouseup', mouseUpSeek);
        };
        document.addEventListener('mouseup', mouseUpSeek);
    }
}

function adjustVolume(e) {
    const rect = el.volumeSlider.getBoundingClientRect();
    let pct = (e.clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    
    el.volumeSliderFill.style.width = `${pct * 100}%`;
    el.volumeSliderThumb.style.left = `${pct * 100}%`;
    
    audio.volume = pct;
    audio.muted = (pct === 0);
    updateVolumeIconState(pct, audio.muted);
}

function toggleMute() {
    audio.muted = !audio.muted;
    if (audio.muted) {
        el.volumeSliderFill.style.width = `0%`;
        el.volumeSliderThumb.style.left = `0%`;
        updateVolumeIconState(0, true);
    } else {
        const volPct = audio.volume * 100;
        el.volumeSliderFill.style.width = `${volPct}%`;
        el.volumeSliderThumb.style.left = `${volPct}%`;
        updateVolumeIconState(audio.volume, false);
    }
}

function updateVolumeIconState(val, isMuted) {
    if (isMuted || val === 0) {
        el.volumeIcon.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15" stroke="currentColor" stroke-width="2"></line>
            <line x1="17" y1="9" x2="23" y2="15" stroke="currentColor" stroke-width="2"></line>
        `;
        el.utilVolumeToggle.title = "Unmute";
    } else if (val < 0.5) {
        el.volumeIcon.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
        el.utilVolumeToggle.title = "Mute";
    } else {
        el.volumeIcon.innerHTML = `
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        `;
        el.utilVolumeToggle.title = "Mute";
    }
}

// 15. Player Core Control Button bindings
function setupPlayerControls() {
    el.ctrlPlayPause.addEventListener('click', togglePlayPause);
    el.ctrlPrev.addEventListener('click', prevTrack);
    el.ctrlNext.addEventListener('click', nextTrack);
    
    // Shuffle toggles
    el.ctrlShuffle.addEventListener('click', () => {
        shuffleActive = !shuffleActive;
        el.ctrlShuffle.classList.toggle('active', shuffleActive);
        
        if (shuffleActive) {
            // Shuffle queue
            el.ctrlShuffle.title = "Disable shuffle";
            const currentSong = audioQueue[audioQueue.findIndex(s => s.id === currentTrackIndex)];
            // filter active song out, shuffle rest, then place active song at top
            let remain = audioQueue.filter(s => s.id !== currentTrackIndex);
            for (let i = remain.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [remain[i], remain[j]] = [remain[j], remain[i]];
            }
            audioQueue = [currentSong, ...remain];
        } else {
            el.ctrlShuffle.title = "Enable shuffle";
            audioQueue = [...originalQueue];
        }
        
        if (rightPanelActive && rightPanelMode === 'queue') renderDrawerQueue();
    });

    // Repeat toggles
    el.ctrlRepeat.addEventListener('click', () => {
        if (repeatMode === 'none') {
            repeatMode = 'all';
            el.ctrlRepeat.classList.add('active');
            el.ctrlRepeat.title = "Repeat one";
            // change repeat icon visually to represent repeat all
        } else if (repeatMode === 'all') {
            repeatMode = 'one';
            el.ctrlRepeat.classList.add('active');
            // visually represent repeat one by adding a badge or small text
            el.ctrlRepeat.title = "Disable repeat";
        } else {
            repeatMode = 'none';
            el.ctrlRepeat.classList.remove('active');
            el.ctrlRepeat.title = "Enable repeat";
        }
    });

    // Save to liked songs button in footer
    el.playerHeartBtn.addEventListener('click', () => {
        toggleLikeTrack(currentTrackIndex);
    });

    // Open lyrics drawer click binding
    el.utilLyrics.addEventListener('click', () => {
        toggleRightPanel('lyrics');
    });

    // Open queue drawer click binding
    el.utilQueue.addEventListener('click', () => {
        toggleRightPanel('queue');
    });

    el.rightPanelCloseBtn.addEventListener('click', () => {
        rightPanelActive = false;
        el.body.classList.remove('right-panel-active');
        el.utilLyrics.classList.remove('active');
        el.utilQueue.classList.remove('active');
    });
}

function toggleLikeTrack(trackId) {
    const isLiked = likedSongs.has(trackId);
    if (isLiked) {
        likedSongs.delete(trackId);
    } else {
        likedSongs.add(trackId);
    }
    savePlaylistsToStorage();
    
    // update footer heart state
    if (trackId === currentTrackIndex) {
        el.playerHeartBtn.classList.toggle('active', !isLiked);
    }

    // Refresh active table views
    if (activeView === 'playlist-detail') {
        renderPlaylistDetails(activePlaylistId);
    } else if (activeView === 'search') {
        const query = el.searchInputField.value.trim().toLowerCase();
        if (query.length > 0) performSearch(query);
    }
}

// 16. Right Panel drawer toggle (Lyrics & Queue Drawer)
function toggleRightPanel(mode) {
    if (rightPanelActive && rightPanelMode === mode) {
        // Toggle close
        rightPanelActive = false;
        el.body.classList.remove('right-panel-active');
        el.utilLyrics.classList.remove('active');
        el.utilQueue.classList.remove('active');
    } else {
        // Toggle open or change modes
        rightPanelActive = true;
        rightPanelMode = mode;
        el.body.classList.add('right-panel-active');
        
        el.utilLyrics.classList.toggle('active', mode === 'lyrics');
        el.utilQueue.classList.toggle('active', mode === 'queue');
        
        if (mode === 'lyrics') {
            el.rightPanelTitle.textContent = "Lyrics";
            el.lyricsContainerView.style.display = 'block';
            el.queueContainerView.style.display = 'none';
            // Trigger scrolling sync instantly
            const activeSong = tracksData.find(s => s.id === currentTrackIndex);
            loadLyrics(activeSong);
        } else {
            el.rightPanelTitle.textContent = "Play Queue";
            el.lyricsContainerView.style.display = 'none';
            el.queueContainerView.style.display = 'block';
            renderDrawerQueue();
        }
    }
}

// Realtime Lyrics loading
function loadLyrics(song) {
    const container = el.lyricsContainerView;
    container.innerHTML = '';
    
    // Set matching colors glow
    el.lyricsGradientGlow.style.backgroundColor = `rgba(${song.colorRGB}, 0.2)`;

    if (!song.lyrics || song.lyrics.length === 0) {
        container.innerHTML = `<div style="padding: 32px 0; color: var(--text-secondary);">No lyrics available for this track.</div>`;
        return;
    }

    song.lyrics.forEach((line, index) => {
        const div = document.createElement('div');
        div.className = `lyrics-line ${index === 0 ? 'active' : ''}`;
        div.setAttribute('data-time', line.time);
        div.textContent = line.text;
        
        // Clicking lyrics seeking
        div.addEventListener('click', () => {
            audio.currentTime = line.time;
            syncLyricsHighlight(line.time);
        });

        container.appendChild(div);
    });
}

function syncLyricsHighlight(currentTime) {
    if (rightPanelMode !== 'lyrics' || !rightPanelActive) return;
    
    const lines = Array.from(el.lyricsContainerView.querySelectorAll('.lyrics-line'));
    if (lines.length === 0) return;
    
    let activeIndex = -1;
    
    // Find active lyrics index
    for (let i = 0; i < lines.length; i++) {
        const t = parseFloat(lines[i].getAttribute('data-time'));
        if (currentTime >= t) {
            activeIndex = i;
        } else {
            break;
        }
    }

    if (activeIndex !== -1) {
        lines.forEach((line, idx) => {
            if (idx === activeIndex) {
                line.classList.add('active');
                
                // Perform micro smooth scrolls to keep active lyric centered
                line.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                line.classList.remove('active');
            }
        });
    }
}

// Queue list renderer inside drawer panel
function renderDrawerQueue() {
    const nowPlayingBox = el.queueNowPlayingList;
    const nextUpBox = el.queueNextUpList;
    
    nowPlayingBox.innerHTML = '';
    nextUpBox.innerHTML = '';
    
    const activeSong = tracksData.find(s => s.id === currentTrackIndex);
    
    // 1. Now playing card
    nowPlayingBox.innerHTML = `
        <div class="playlist-item active" style="cursor: default;">
            <img class="playlist-art" src="${activeSong.cover}" alt="Cover">
            <div class="playlist-info">
                <div class="playlist-name" style="color: var(--spotify-green);">${activeSong.title}</div>
                <div class="playlist-details">${activeSong.artist}</div>
            </div>
        </div>
    `;

    // 2. Next up list cards
    const curQueueIdx = audioQueue.findIndex(s => s.id === currentTrackIndex);
    const nextSongs = audioQueue.slice(curQueueIdx + 1);

    if (nextSongs.length === 0) {
        nextUpBox.innerHTML = `<div style="font-size: 13px; color: var(--text-secondary); padding: 8px;">End of playback queue. Add more songs or enable repeat mode.</div>`;
        return;
    }

    nextSongs.forEach((song, idx) => {
        const div = document.createElement('div');
        div.className = 'playlist-item';
        div.innerHTML = `
            <div class="playlist-art">
                <img src="${song.cover}" alt="Cover" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="playlist-info">
                <div class="playlist-name">${song.title}</div>
                <div class="playlist-details">${song.artist}</div>
            </div>
        `;
        
        // Click to skip ahead in queue
        div.addEventListener('click', () => {
            const newIndex = curQueueIdx + 1 + idx;
            loadTrack(newIndex, true);
        });

        nextUpBox.appendChild(div);
    });
}

// 17. Floating Options Context Menu on Right Click
let activeContextSongId = null;
let activeContextPlaylistId = null;

function setupContextMenuListeners() {
    // Click outside to close context menus
    document.addEventListener('click', () => {
        el.customContextMenu.style.display = 'none';
    });

    // Liked Songs option click
    el.ctxAddToLiked.addEventListener('click', () => {
        if (activeContextSongId !== null) {
            likedSongs.add(activeContextSongId);
            savePlaylistsToStorage();
            
            // Re-render
            if (activeView === 'playlist-detail') renderPlaylistDetails(activePlaylistId);
        }
    });

    // Add to library playback queue option click
    el.ctxAddToQueue.addEventListener('click', () => {
        if (activeContextSongId !== null) {
            const song = tracksData.find(s => s.id === activeContextSongId);
            audioQueue.push(song);
            if (rightPanelActive && rightPanelMode === 'queue') renderDrawerQueue();
            
            // Alert user visually
            console.log(`Added ${song.title} to queue.`);
        }
    });
}

function openContextMenu(e, songId, x, y) {
    activeContextSongId = songId;
    el.customContextMenu.style.display = 'block';
    
    // adjust bounds checking so context menu doesn't overflow screen
    const menuWidth = el.customContextMenu.offsetWidth || 180;
    const menuHeight = el.customContextMenu.offsetHeight || 150;
    
    if (x + menuWidth > window.innerWidth) {
        x = window.innerWidth - menuWidth - 10;
    }
    if (y + menuHeight > window.innerHeight) {
        y = window.innerHeight - menuHeight - 10;
    }

    el.customContextMenu.style.left = `${x}px`;
    el.customContextMenu.style.top = `${y}px`;

    // Populate Add-to-playlist Submenus
    const submenu = el.ctxPlaylistsSubmenu;
    submenu.innerHTML = '';

    if (customPlaylists.length === 0) {
        submenu.innerHTML = `<div class="context-menu-item" style="opacity: 0.6; cursor: default;">No playlists created</div>`;
        return;
    }

    customPlaylists.forEach(playlist => {
        const item = document.createElement('div');
        item.className = 'context-menu-item';
        item.textContent = playlist.name;
        
        item.addEventListener('click', () => {
            // Add song to this playlist
            if (!playlist.songs.includes(songId)) {
                playlist.songs.push(songId);
                savePlaylistsToStorage();
                renderSidebarPlaylists();
                
                if (activePlaylistId == playlist.id) {
                    renderPlaylistDetails(playlist.id);
                }
            }
        });
        submenu.appendChild(item);
    });
}

// Options menu for custom playlists (Rename/Delete)
function openPlaylistOptionsContextMenu(e, playlistId, x, y) {
    activeContextPlaylistId = playlistId;
    el.customContextMenu.style.display = 'block';
    el.customContextMenu.style.left = `${x}px`;
    el.customContextMenu.style.top = `${y}px`;

    const submenu = el.ctxPlaylistsSubmenu;
    submenu.innerHTML = '';

    el.customContextMenu.innerHTML = `
        <div class="context-menu-item" id="ctx-playlist-rename">Rename Playlist</div>
        <div class="context-menu-item" id="ctx-playlist-delete" style="color: #ff5252;">Delete Playlist</div>
    `;

    document.getElementById('ctx-playlist-rename').onclick = () => {
        openPlaylistModal(true, playlistId);
    };

    document.getElementById('ctx-playlist-delete').onclick = () => {
        if (confirm("Are you sure you want to delete this playlist? This action cannot be undone.")) {
            customPlaylists = customPlaylists.filter(p => p.id !== playlistId);
            savePlaylistsToStorage();
            renderSidebarPlaylists();
            navigateToView('home');
        }
    };
    
    // Rebind normal events reset when closed
    const resetMenu = () => {
        el.customContextMenu.innerHTML = `
            <div class="context-menu-item" id="ctx-add-to-liked">Add to Liked Songs</div>
            <div class="context-menu-item" id="ctx-add-to-queue">Add to Queue</div>
            <div class="context-menu-item context-menu-item-submenu">
                <span>Add to Playlist</span>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                <div class="context-submenu" id="ctx-playlists-submenu"></div>
            </div>
        `;
        // Re-cache and bind options
        el.ctxAddToLiked = document.getElementById('ctx-add-to-liked');
        el.ctxAddToQueue = document.getElementById('ctx-add-to-queue');
        el.ctxPlaylistsSubmenu = document.getElementById('ctx-playlists-submenu');
        setupContextMenuListeners();
        document.removeEventListener('click', resetMenu);
    };
    document.addEventListener('click', resetMenu, { once: true });
}

// 18. Quick play buttons on Home page grids
function setupHomeClickListeners() {
    // Play row quick clicks
    document.querySelectorAll('.quick-card').forEach(card => {
        const id = parseInt(card.getAttribute('data-track-id'));
        
        // Clicking playing row triggers pause / play
        card.addEventListener('click', () => {
            if (currentTrackIndex === id) {
                togglePlayPause();
            } else {
                setPlaybackQueue(tracksData, id);
            }
        });
        
        // Play button overlay
        card.querySelector('.quick-play-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentTrackIndex === id) {
                togglePlayPause();
            } else {
                setPlaybackQueue(tracksData, id);
            }
        });
    });

    // Standard card grid items
    document.querySelectorAll('.standard-card').forEach(card => {
        const id = parseInt(card.getAttribute('data-track-id'));
        
        card.addEventListener('click', () => {
            navigateToView('playlist-detail', 'all');
            // Find active element row and scroll it into center view
            setTimeout(() => {
                const tr = document.querySelector(`.song-row[data-track-id="${id}"]`);
                if (tr) tr.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });

        card.querySelector('.card-play-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            setPlaybackQueue(tracksData, id);
        });
    });
}

// 19. Keyboard Accessibility Shortcuts (Global Hotkeys)
function setupKeyboardHotkeys() {
    document.addEventListener('keydown', (e) => {
        // Skip hotkeys if user is currently typing in search bars or inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlayPause();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                // Seek back 5 seconds
                audio.currentTime = Math.max(0, audio.currentTime - 5);
                break;
            case 'ArrowRight':
                e.preventDefault();
                // Seek forward 5 seconds
                audio.currentTime = Math.min(audio.duration || 0, audio.currentTime + 5);
                break;
            case 'ArrowUp':
                e.preventDefault();
                // Volume up 5%
                audio.volume = Math.min(1, audio.volume + 0.05);
                syncVolumeSliderVisuals(audio.volume);
                break;
            case 'ArrowDown':
                e.preventDefault();
                // Volume down 5%
                audio.volume = Math.max(0, audio.volume - 0.05);
                syncVolumeSliderVisuals(audio.volume);
                break;
            case 'KeyM':
                toggleMute();
                break;
            case 'KeyL':
                toggleLikeTrack(currentTrackIndex);
                break;
        }
    });
}

function syncVolumeSliderVisuals(val) {
    const volPct = val * 100;
    el.volumeSliderFill.style.width = `${volPct}%`;
    el.volumeSliderThumb.style.left = `${volPct}%`;
    updateVolumeIconState(val, false);
}

// Execute app initializer
window.addEventListener('DOMContentLoaded', initApp);
