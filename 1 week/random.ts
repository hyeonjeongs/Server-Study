// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기

interface Member {
    name: string;
    position: string;
}

interface Dinner {
    member: Member[];
    shuffle(members: Member[]): Member[];
    organize(members: Member[]): void;
}

const dinner: Dinner = {
    member: [
        {
            name: '박현정',
            position: 'ob'
        },
        {
            name: '이씨',
            position: 'ob'
        },
        {
            name: '김씨',
            position: 'yb'
        },
        {
            name: '박씨',
            position: 'yb'
        }
    ],
    shuffle(members) {
        members.sort(() => Math.random() - 0.5); // 무작위 정렬(음수or양수 나오게 해서 섞음)
        return members;
    },
    organize(members) {
        this.shuffle(members);

        const ob: Member | undefined = members.find((members) => members.position === "ob"); // undefined 처리 해주기
        const yb: Member | undefined = members.find((members) => members.position === "yb");

        if (ob && yb) {
            const dinnerMember: string[] = [];
            dinnerMember.push(ob.name);
            dinnerMember.push(yb.name);
            console.log(`오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}`);
        }
    }
};

dinner.organize(dinner.member);