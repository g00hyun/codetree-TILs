import java.util.*;
import java.io.*;

public class Main {
    static int n;
    static int time;
    static Person[] person;
    static PriorityQueue<Person> pq = new PriorityQueue<>((a,b) -> a.num - b.num);

    public static void main(String[] args) throws IOException {
        // Please write your code here.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        person = new Person[n];
        for(int i = 0; i<n; i++) {
            int[] line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            person[i] = new Person(i+1, line[0], line[1]);
        }

        time = 0;
        simulation();
    }

    private static void simulation() {
        // 처음 시작하는 시간으로 시간 설정
        time = Arrays.stream(person).filter(v -> !v.visited).map(v -> v.arrivalTime).reduce((a,b) -> Math.min(a, b)).get();
        // 시간에 맞는 사람 pq에 삽입
        while(!isAllEnqueue() || !pq.isEmpty()) {
            enqueue();
            enterPersonAndSpendTime();
        }

        int result = Arrays.stream(person).map(v -> v.enterTime - v.arrivalTime).reduce(Math::max).get();
        print(result + "");
        // 한명씩 pq에서 빼면서 시간 계산

    }

    private static boolean isAllEnqueue() {
        return Arrays.stream(person).allMatch(v -> v.visited);
    }

    private static void enterPersonAndSpendTime() {
        if(pq.isEmpty()) {
            time = Arrays.stream(person).filter(v -> !v.visited).map(v -> v.arrivalTime).reduce((a,b) -> Math.min(a, b)).get();  
        }
        else {
            Person p = pq.poll();
            p.enterTime = time;

            time += p.spendTime;
        }
    }

    private static void enqueue() {
        for(Person p : person) {
            if(!p.visited && p.arrivalTime <= time) {
                p.visited = true;
                pq.add(p);
            }
        }
    }

    private static void print(String s) {
        System.out.print(s);
    }
}

class Person {
    int num;
    int arrivalTime;
    int spendTime;
    boolean visited;
    int enterTime;

    Person(int n, int a, int s) {
        this.num = n;
        this.arrivalTime = a;
        this.spendTime = s;
        this.visited = false;
        this.enterTime = 0;
    }
}