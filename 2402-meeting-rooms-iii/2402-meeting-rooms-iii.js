/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
    // sort meeting by start day then by end date
    meetings.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    // create a PQ sort by end time, and then by room
    const pq = new MinPriorityQueue({ compare: (a, b) => a[1] === b[1] ? a[2] > b[2] : a[1] > b[1] });
    let roomRecords = new Array(n).fill(0);
    let rooms = new MinPriorityQueue();
    for (let i = 0; i < n; i++) {
        rooms.enqueue(i);
    }

    for (let [start, end] of meetings) {
        const duration = end - start;
        // ring ring allo room service
        while (pq.front()?.[1] <= start) {
            rooms.enqueue(pq.dequeue()[2]);
        }

        // there's room avaiable
        if (rooms.size() !== 0) {
            // find the lowest possible room
            const room = rooms.dequeue().element;
            pq.enqueue([start, end, room]);
            roomRecords[room]++;
            continue;
        }

        // no room, look for next avaiable room
        let firstMeetingToEnd = pq.dequeue();
        const room = firstMeetingToEnd[2];
        pq.enqueue([firstMeetingToEnd[1], firstMeetingToEnd[1] + duration, room]);
        roomRecords[room]++;
    }

    // find the room that hosted most meetings
    let res = -1;
    let max = -Infinity;
    for (let i = 0; i < roomRecords.length; i++) {
        if (max < roomRecords[i]) {
            res = i;
            max = roomRecords[i];
        }
    }

    return res;
};