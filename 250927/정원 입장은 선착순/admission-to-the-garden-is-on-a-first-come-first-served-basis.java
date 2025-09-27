import java.util.*;
import java.io.*;

public class Main {
    static int n;
    static int time;
    static Person[] person;
    static PriorityQueue<Person> pq = new PriorityQueue<>((a,b) -> a.arrivalTime - b.arrivalTime);
    static PriorityQueue<Person> waiting = new PriorityQueue<>((a,b) -> a.num - b.num);

    public static void main(String[] args) throws IOException {
        // Please write your code here.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        n = Integer.parseInt(br.readLine());
        person = new Person[n];
        for(int i = 0; i<n; i++) {
            int[] line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            person[i] = new Person(i+1, line[0], line[1]);
        }

        for(Person p : person)
            pq.add(p);

        time = 0;
        simulation();
    }

// pq -> waiting
// 넘어가는 시점 : time보다 작으면 넘어가면 됌
    private static void simulation() {
        // 처음 시작하는 시간으로 시간 설정
        // time = Arrays.stream(person).filter(v -> !v.visited).map(v -> v.arrivalTime).reduce((a,b) -> Math.min(a, b)).get();
        // 시간에 맞는 사람 pq에 삽입
        while(!pq.isEmpty() || !waiting.isEmpty()) {
            if(!pq.isEmpty()) {
                Person p = pq.peek();
                if(p.arrivalTime <= time) {
                    waiting.add(pq.poll());
                    continue;
                }
                if(waiting.isEmpty()) {
                    time = p.arrivalTime;
                }
            }

            if(!waiting.isEmpty()) {
                Person enter = waiting.poll();
                // print("[Enter Person] #" + enter.num + " in time " + time + "\n");
                enter.enterTime = time;
                time += enter.spendTime;
            }
        }

        int result = Arrays.stream(person).map(v -> v.enterTime - v.arrivalTime).reduce(Math::max).get();
        print(result + "");

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