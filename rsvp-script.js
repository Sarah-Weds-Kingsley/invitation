// Guest database with names, photos, and table numbers
const guests = [
    {
        id: 1,
        name: "Cynthia and Igho Matthew",
        photo: "images/cy.jpg",
        table: 1,
        seat: "A1",
        category: "Family",
        plusOne: "Yes",
        searchTerms: ["cynthia", "igho", "matthew"]
    },
    {
        id: 2,
        name: "Ifeoma Amaechi",
        photo: "images/ifymysister.jpg",
        table: 1,
        seat: "A2",
        category: "Family",
        plusOne: "Yes",
        searchTerms: ["ifeoma", "amaechi"]
    },
    {
        id: 3,
        name: "Ifeanyi Amaechi",
        photo: "images/bestman.jpg",
        table: 1,
        seat: "A3",
        category: "Family",
        plusOne: "Yes",
        searchTerms: ["ifeanyi", "amaechi"]
    },
    {
        id: 4,
        name: "Kaycee and Betty Amaechi",
        photo: "images/kezman.jpg",
        table: 1,
        seat: "A4",
        category: "Family",
        plusOne: "Yes",
        searchTerms: ["kaycee", "amaechi", "betty"]
    },
    {
        id: 5,
        name: "Obed Akakpor",
        photo: "images/obed.jpg",
        table: 2,
        seat: "B1",
        category: "Childhood Friend",
        plusOne: "Yes",
        searchTerms: ["obed", "akakpor"]
    },
    {
        id: 6,
        name: "Akanne Chigozie",
        photo: "images/akanne.jpg",
        table: 2,
        seat: "B4",
        category: "Childhood Friend",
        plusOne: "Yes",
        searchTerms: ["akanne", "chigozie"]
    },
    {
        id: 7,
        name: "Okere Emmanuel",
        photo: "images/obinna.JPG",
        table: 1,
        seat: "A5",
        category: "Family",
        plusOne: "No",
        searchTerms: ["okere", "emmanuel"]
    },
    {
        id: 8,
        name: "Kingsley Ugochukwu",
        photo: "images/vuga.JPG",
        table: 2,
        seat: "B2",
        category: "Childhood Friend",
        plusOne: "Yes",
        searchTerms: ["kingsley", "ugochukwu"]
    },
    {
        id: 9,
        name: "Stanley Akpan",
        photo: "images/stanley.jpg",
        table: 4,
        seat: "D3",
        category: "Grooms Man",
        plusOne: "Yes",
        searchTerms: ["stanley", "akpan", "joy"]
    },
    {
        id: 10,
        name: "Charles Dellons",
        photo: "images/mmm.jpg",
        table: 3,
        seat: "C1",
        category: "Friend of the Groom",
        plusOne: "No",
        searchTerms: ["charles", "dellons"]
    },
    {
        id: 11,
        name: "Michael Morah",
        photo: "images/morah.jpg",
        table: 3,
        seat: "C2",
        category: "Friend of the Groom",
        plusOne: "Yes",
        searchTerms: ["michael", "morah"]
    },
    {
        id: 12,
        name: "Ugochukwu Raymond",
        photo: "images/noimage.jpg",
        table: 3,
        seat: "C3",
        category: "Friend of the Groom",
        plusOne: "Yes",
        searchTerms: ["ugochukwu", "raymond"]
    },
    {
        id: 13,
        name: "Great Ahize",
        photo: "images/great.jpg",
        table: "3",
        seat: "C4",
        category: "Friend of the Groom",
        plusOne: "Yes",
        searchTerms: ["great", "ahize"]
    },
    {
        id: 14,
        name: "Mr. & Mrs. Godwin Amaechi",
        photo: "images/mummy.jpg",
        table: 1,
        seat: "A7 A8",
        category: "Parents of the Groom",
        plusOne: "No",
        searchTerms: ["lina", "angelina", "godwin", "amaechi"]
    },
    {
        id: 15,
        name: "Nkem Ebubealor",
        photo: "images/nkemsiebbs.jpg",
        table: 1,
        seat: "A6",
        category: "Friend of the Bride and Groom",
        plusOne: "No",
        searchTerms: ["nkem", "ebubealor"]
    },
    {
        id: 16,
        name: "Chinedu Okenu",
        photo: "images/cyno.jpg",
        table: 3,
        seat: "C5",
        category: "Friend of the Groom",
        plusOne: "Yes",
        searchTerms: ["chinedu", "okenu"]
    },
        {
        id: 17,
        name: "Ifeanyi Nkem Frenzy",
        photo: "images/frenzy.jpg",
        table: 4,
        seat: "D2",
        category: "Bestman",
        plusOne: "No",
        searchTerms: ["ifeanyi", "frenzy"]
    },
    {
        id: 18,
        name: "Mr and Mrs Victor Onwuka",
        photo: "images/great.jpg",
        table: "3",
        seat: "C5",
        category: "Friend of the Groom",
        plusOne: "No",
        searchTerms: ["victor", "onwuka"]
    },
    {
        id: 19,
        name: "Idris Spicey",
        photo: "images/spicy.jpg",
        table: "4",
        seat: "D1",
        category: "Grooms man",
        plusOne: "No",
        searchTerms: ["idris", "spicey"]
    },
    {
        id: 20,
        name: "Joy Akpan",
        photo: "images/stanley.jpg",
        table: 2,
        seat: "B5",
        category: "Friend of the Groom",
        plusOne: "No",
        searchTerms: ["Joy", "Akpan"]
    },
];

// Add this code to your existing rsvp-script.js file, at the end of the DOMContentLoaded function

// Google Maps functionality
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Copy Address Functionality
    const copyAddressBtn = document.getElementById('copyAddressBtn');
    const venueAddress = "NECA HOUSE, Plot A2, Hakeem Balogun Street, Central Business District, Alausa, Ikeja, Lagos";
    
    copyAddressBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(venueAddress).then(() => {
            showToast('Address copied to clipboard!');
            
            // Visual feedback
            const originalText = copyAddressBtn.innerHTML;
            copyAddressBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Copied!
            `;
            copyAddressBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
            
            setTimeout(() => {
                copyAddressBtn.innerHTML = originalText;
                copyAddressBtn.style.background = 'linear-gradient(45deg, #6b5b95, #8a7fba)';
            }, 2000);
            
        }).catch(err => {
            console.error('Failed to copy address: ', err);
            showToast('Failed to copy address');
        });
    });
    
    // Enhanced toast notification
    function showToast(message) {
        // Remove existing toast if any
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            ${message}
        `;
        document.body.appendChild(toast);
        
        // Remove toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(10px)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 3000);
    }
    
    // ... rest of existing code ...
});

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const guestInfo = document.getElementById('guestInfo');
const notFound = document.getElementById('notFound');
const tryAgainBtn = document.getElementById('tryAgainBtn');

// Guest info elements
const guestName = document.getElementById('guestName');
const guestImage = document.getElementById('guestImage');
const guestTable = document.getElementById('guestTable');
const guestSeat = document.getElementById('guestSeat');
const guestCategory = document.getElementById('guestCategory');
const guestPlusOne = document.getElementById('guestPlusOne');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Clear button visibility
    searchInput.addEventListener('input', function() {
        clearBtn.classList.toggle('show', this.value.length > 0);
        if (this.value.length === 0) {
            hideAllResults();
        }
    });

    // Clear button functionality
    clearBtn.addEventListener('click', function() {
        searchInput.value = '';
        clearBtn.classList.remove('show');
        hideAllResults();
        searchInput.focus();
    });

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        if (searchTerm.length < 2) {
            hideAllResults();
            return;
        }
        
        const foundGuest = guests.find(guest => 
            guest.name.toLowerCase().includes(searchTerm) ||
            guest.searchTerms.some(term => term.includes(searchTerm))
        );
        
        if (foundGuest) {
            displayGuestInfo(foundGuest);
        } else {
            showNotFound();
        }
    });

    // Try again button
    tryAgainBtn.addEventListener('click', function() {
        notFound.classList.add('hidden');
        searchInput.value = '';
        searchInput.focus();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            hideAllResults();
            searchInput.focus();
        }
        if (e.key === 'Enter' && searchInput.value.trim().length > 0) {
            const searchTerm = searchInput.value.toLowerCase().trim();
            const foundGuest = guests.find(guest => 
                guest.name.toLowerCase().includes(searchTerm) ||
                guest.searchTerms.some(term => term.includes(searchTerm))
            );
            
            if (foundGuest) {
                displayGuestInfo(foundGuest);
            } else {
                showNotFound();
            }
        }
    });
});

// Display guest information
function displayGuestInfo(guest) {
    guestName.textContent = guest.name;
    guestImage.src = guest.photo;
    guestImage.alt = `Photo of ${guest.name}`;
    guestTable.textContent = guest.table;
    guestSeat.textContent = guest.seat;
    guestCategory.textContent = guest.category;
    guestPlusOne.textContent = guest.plusOne;
    
    // Show guest info, hide not found
    guestInfo.classList.remove('hidden');
    notFound.classList.add('hidden');
    
    // Add special styling for VIP tables
    if (guest.table === 'VIP' || guest.table === 'Family') {
        guestTable.classList.add('vip-table');
        guestTable.style.color = '#FFD700';
        guestTable.style.background = 'rgba(255, 215, 0, 0.1)';
    } else {
        guestTable.classList.remove('vip-table');
        guestTable.style.color = '';
        guestTable.style.background = '';
    }
}

// Show not found message
function showNotFound() {
    guestInfo.classList.add('hidden');
    notFound.classList.remove('hidden');
}

// Hide all results
function hideAllResults() {
    guestInfo.classList.add('hidden');
    notFound.classList.add('hidden');
}

// Add some decorative elements
document.addEventListener('DOMContentLoaded', function() {
    // Add floating hearts animation
    const heartsContainer = document.createElement('div');
    heartsContainer.className = 'floating-hearts';
    document.body.appendChild(heartsContainer);
    
    const heartStyles = document.createElement('style');
    heartStyles.textContent = `
        .floating-hearts {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
        
        .floating-heart {
            position: absolute;
            color: rgba(255, 182, 193, 0.3);
            font-size: 20px;
            animation: floatHeart 15s linear infinite;
        }
        
        @keyframes floatHeart {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 0.3;
            }
            90% {
                opacity: 0.3;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(heartStyles);
    
    // Create floating hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.animationDelay = `${Math.random() * 15}s`;
            heart.style.fontSize = `${Math.random() * 15 + 15}px`;
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 16000);
        }, i * 800);
    }
    
    // Set focus on search input
    setTimeout(() => {
        searchInput.focus();
    }, 500);

});

