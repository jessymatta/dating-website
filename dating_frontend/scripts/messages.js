const sent_msg_div = document.getElementById("sent=msgs");
const rec_msg_div = document.getElementById("rec-msgs");
const sent_msgs_url = "http://127.0.0.1:8000/api/v0.1/get_messages"
const rec_msgs_url = "http://127.0.0.1:8000/api/v0.1/get_received_messages"

const getSentMsgs = async () => {

    try {
        const response = await axios.get(sent_msgs_url, {
            headers: {
                'Authorization': `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        const profiles = response.data.sent_messages;
        createMsgs(profiles, sent_msg_div);
        return profiles;

    } catch (error) {
        console.log(error);
    }
}

const getRecMsgs = async () => {

    try {
        const response = await axios.get(rec_msgs_url, {
            headers: {
                'Authorization': `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        const profiles = response.data.received_msgs;
        createMsgs(profiles, rec_msg_div);
        return profiles;

    } catch (error) {
        console.log(error);
    }
}

getSentMsgs();
getRecMsgs();

// sent_messages

function createMsgs(profiles, container_name) {
    if (profiles.length != 0) {
        for (let i = 0; i < profiles.length; i++) {
            let profile_id = profiles[i].receiver_id;
            let profile_msg = profiles[i].content
            let profile_msg_date = profiles[i].created_at;
            const profile_to_append = `
        <div class="message">
        <p>To:<span>${profile_id}</span></p>
        <p>Message:<span>${profile_msg}</span></p>
        <p>${profile_msg_date}</p>
        </div>`
            container_name.innerHTML += profile_to_append;
        }
    }

}