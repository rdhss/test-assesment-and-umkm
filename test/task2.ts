type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}
const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]



// CASE 1



/*------------------- NO 1 ---------------------- */
let data: any = []
const repliesCount = (comment: IComment[]) => {
    const hai = comment.map(item => {
        if (item.replies) {
            data.push(item.commentId)
            repliesCount(item.replies)
        } else {
            data.push(item.commentId)
        }
    })
    return data.length
}

console.log(repliesCount(comments))
// JAWABAN
// 7
