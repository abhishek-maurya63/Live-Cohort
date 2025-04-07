const users = [
  {
    username: "john_doe",
    bio: "Web Developer",
    profilePic: "https://images.unsplash.com/photo-1603415526960-f7e0328fddb4",
  },
  {
    username: "jane_coder",
    bio: "UI/UX Designer",
    profilePic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
  },
  {
    username: "frontend_guy",
    bio: "React Enthusiast",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    username: "cssqueen",
    bio: "CSS Magician",
    profilePic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  {
    username: "node_ninja",
    bio: "Backend Dev",
    profilePic: "https://images.unsplash.com/photo-1502767089025-6572583495b0",
  },
  {
    username: "ai_geek",
    bio: "AI/ML Enthusiast",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    username: "pixel_master",
    bio: "Graphic Designer",
    profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    username: "codewithneha",
    bio: "Python Dev",
    profilePic: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
  },
  {
    username: "swift_dev",
    bio: "iOS Engineer",
    profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    username: "techie_tanya",
    bio: "Data Scientist",
    profilePic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  },
  {
    username: "android_ali",
    bio: "Android Developer",
    profilePic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
  },
  {
    username: "dev_diya",
    bio: "JavaScript Queen",
    profilePic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    username: "bug_fixer",
    bio: "QA Tester",
    profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
  },
  {
    username: "deepak_ai",
    bio: "ML Engineer",
    profilePic: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94",
  },
  {
    username: "kavya_ux",
    bio: "UX Expert",
    profilePic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  },
  {
    username: "pranav_dev",
    bio: "Fullstack Engineer",
    profilePic: "https://images.unsplash.com/photo-1589571894960-20bbe2828c94",
  },
  {
    username: "flutter_girl",
    bio: "Flutter Dev",
    profilePic: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
  },
  {
    username: "rustacean",
    bio: "Rust Dev",
    profilePic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  },
  {
    username: "data_diva",
    bio: "Big Data Analyst",
    profilePic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  },
  
];
let main = document.querySelector("main");
users.forEach((user, idx) => {
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  card.innerHTML = `<div class="profile-pic">
        <img src="${user.profilePic}" />
      </div>
      <h3>${user.username}</h3>
      <p>${user.bio}r</p>
      <button class="follow-btn">Follow</button>
      <div class="like-area">
        <!-- Double click heart feature can go here -->
        <img id="unliked" src="/Lec 44/Insta Like feature Old/heart.png" alt="Like" class="like-icon" />
      </div>`;
  main.appendChild(card);
});

