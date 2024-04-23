const ctx = document.getElementById('myChart'); // Canvas 요소를 가져온다.
const myChart = new Chart(ctx, {				// 새로운 차트 생성
    type: 'bar',								// 차트 타입은 막대차트이다.
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], //항목별 이름
        datasets: [{
            label: '# of Votes',		// hover시 표시되는 글자
            data: [12, 19, 3, 5, 2, 3], // 막대 차트 각각의 데이터
            backgroundColor: [			// 차트 막대의 배경색
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [				// 차트 막대의 테두리색
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1				// 차트 막대의 테두리 굵기
        }]
    },
    options: {							// 옵션 설정
      	responsive: false,				// 생략하면 true로 전체 넓이만큼 커진다.
        scales: {						// 
            y: {						// y 축
                beginAtZero: true		// 막대의 값비교를 0과 하는가 최솟값과 하는가
            }
        }
    }
});
