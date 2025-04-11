import java.util.*;

class Pair implements Comparable<Pair> {
    int x;
    int y;

    Pair(int x, int y) {
        this.x = x;
        this.y = y;
    }

    @Override
    public int compareTo(Pair p) {
        return (p.x + p.y - this.x - this.y) * -1;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] points = new int[n][2];
        for (int i = 0; i < n; i++) {
            points[i][0] = sc.nextInt();
            points[i][1] = sc.nextInt();
        }
        // Please write your code here.
        PriorityQueue<Pair> pq = new PriorityQueue<>();

        for(int[] point : points) {
            pq.add(new Pair(point[0], point[1]));
        }

        while(m-- > 0) {
            Pair p = pq.poll();
            pq.add(new Pair(p.x + 2, p.y + 2));
        }

        Pair p = pq.poll();
        System.out.println(p.x + " " + p.y);
    }
}