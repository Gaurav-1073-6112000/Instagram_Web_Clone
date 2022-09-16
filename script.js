var arr = [{
        name: "Amelia",
        img: "https://images.unsplash.com/photo-1627292441194-0280c19e74e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        cat: "Follow",
        username: "Amelia_147"
    },
    {
        name: "James",
        img: "https://images.unsplash.com/photo-1600854964509-6c18d85a260e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        cat: "Follow",
        username: "James_258"
    },
    {
        name: "Sophia",
        img: "https://images.unsplash.com/photo-1618149103489-0e1210d6128a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        cat: "Follow",
        username: "Sophia_369"
    },
    {
        name: "William",
        img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80",
        cat: "Follow",
        username: "William_471"
    },

    {
        name: "Ella",
        img: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        cat: "Follow",
        username: "Ella_582"
    },
    {
        name: "Henry",
        img: "https://images.unsplash.com/photo-1616702451225-6671e7e831f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        cat: "Follow",
        username: "Henry_693"
    },
    {
        name: "Grace",
        img: "https://images.unsplash.com/photo-1616091093714-c64882e9ab55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        cat: "Follow",
        username: "Grace_714"
    },

    {
        name: "Jack",
        img: "https://images.unsplash.com/photo-1514471269849-fda3a4441307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        cat: "Follow",
        username: "Jack_825"
    },
    {
        name: "Elena",
        img: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
        cat: "Follow",
        username: "Elena_936"
    },
    {
        name: "Michael",
        img: "https://images.unsplash.com/photo-1612462767153-e8fd5ef189f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
        cat: "Follow",
        username: "Michael_654"
    }
]

// inserting story in story section

var clutter = "";
arr.forEach(function (elem, index) {
    clutter +=
        `<div class="story">
            <img src="${elem.img}" alt="" id="${index}">
         </div>`
})

document.querySelector("#storiesSec").innerHTML = clutter;

// -----------------------------------------------------------------------------------------------------------------------------------------------

// showing story code

function showStory(iAdd) {
    document.querySelector("#storyContent img").setAttribute("src", iAdd);
    document.querySelector("#overlay").style.display = "flex";
}

var progressP = 0;
var currentPostShowing = 0;

document.querySelector("#storiesSec").addEventListener("click", function (dets) {
    showStory(arr[dets.target.id].img);
    currentPostShowing = Number(dets.target.id);

    var timer = setInterval(function () {
        if (progressP < 100) {
            progressP++;
            document.querySelector("#progressBar").style.width = progressP + "%";
        } else {
            if (currentPostShowing + 1 < arr.length) {
                currentPostShowing++;
                showStory(arr[currentPostShowing].img);
                progressP = 0;
                document.querySelector("#progressBar").style.width = progressP + "%";
            } else {
                document.querySelector("#overlay").style.display = "none";
                clearInterval(timer);
                progressP = 0;
                document.querySelector("#progressBar").style.width = progressP + "%";
            }
        }
    }, 25);

    document.querySelector("#storyCBtn").addEventListener("click", function () {
        document.querySelector("#overlay").style.display = "none";
        clearInterval(timer);
        progressP = 0;
        document.querySelector("#progressBar").style.width = progressP + "%";
    })
})

// -----------------------------------------------------------------------------------------------------------------------------------------------

// inserting posts in post section

var clutter1 = "";
arr.forEach(function (elem) {
    clutter1 +=
        `<div class="posts">
            <div class="header">
                <div class="lH">
                    <div class="uDP">
                    <img src="${elem.img}" alt="">
                    </div>
                    <h1>${elem.name}</h1>
                </div>
                <div><i class="ri-more-fill"></i></div>
            </div>        
            <div class="postCtn">
                <img src="${elem.img}" alt="">
            </div>
            <div id="pNav">
                <div id="pNav1">
                    <i class="ri-heart-line"></i>
                    <i class="ri-chat-3-line"></i>
                    <i class="ri-send-plane-fill"></i>
                </div>
                <div>
                    <i class="ri-bookmark-line"></i>
                </div>
            </div>
            <h6>100 Likes</h6>
            <h6>View Comments</h6>
            <div id="postC">
                <i class="ri-emotion-happy-line"></i>
                <input type="text" placeholder="Add a comment...">
                <button>Post</button>
            </div>
        </div>`
})

document.querySelector("#postsSec").innerHTML = clutter1;

// -----------------------------------------------------------------------------------------------------------------------------------------------

// inserting suggestions in suggestion section


function sshow() {
    var clutter2 = "";
    arr.forEach(function (elem, no) {
        clutter2 +=
            `<div id="suggestions">
                <div id="sleftPN">
                    <div id="sleftPNL"><img src="${elem.img}" alt=""></div>
                    <div id="sleftPNR">
                        <h5>${elem.username}</h5>
                        <h5>${elem.name}</h5>
                    </div>
                </div>
                <div id="srightPN">
                    <h5 id="${no}" class="follows">${elem.cat}</h5>
                </div>
            </div>`
    });

    document.querySelector("#suggSec").innerHTML = clutter2;
};

sshow();

// -----------------------------------------------------------------------------------------------------------------------------------------------

// follow and following button code

var flag = 0;
document.querySelector("#suggSec").addEventListener("click", function (dets) {
    sshow();
    if (flag === 0) {
        arr[dets.target.id].cat = "Following";
        sshow();
        flag = 1;
    } else {
        arr[dets.target.id].cat = "Follow";
        sshow();
        flag = 0;
    }
})

// -----------------------------------------------------------------------------------------------------------------------------------------------

// 0133@6112000