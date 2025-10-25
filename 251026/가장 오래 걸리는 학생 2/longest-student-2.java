import java.util.*;
import java.io.*;

public class Main {
    static int n, m;
    static int[] dist;
    static List<Pair>[] map;

    static PriorityQueue<Pair> pq = new PriorityQueue<>((a,b) -> a.weight - b.weight);

    public static void main(String[] args) throws IOException {
        // Please write your code here.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        n = line[0]; m = line[1];

        dist = new int[n+1];
        map = new ArrayList[n+1];

        Arrays.fill(dist, 100_000_000);
        for(int i = 0; i<=n; i++)
            map[i] = new ArrayList<>();

        for(int i = 0; i<m; i++) {
            line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

            int from = line[0];
            int to = line[1];
            int weight = line[2];

            map[to].add(new Pair(from, weight));
        }

        dist[n] = 0;
        pq.add(new Pair(n, 0));
        while(!pq.isEmpty()) {
            Pair cur = pq.poll();
            int idx = cur.to;
            int d = cur.weight;

            if(d != dist[idx]) continue;

            for(int i = 0; i<map[idx].size(); i++) {
                int nidx = map[idx].get(i).to;
                int nd = map[idx].get(i).weight;

                int newDist = dist[idx] + nd;
                if(newDist < dist[nidx]) {
                    dist[nidx] = newDist;
                    pq.add(new Pair(nidx, newDist));
                }
            }
        }

        int answer = 0;
        for(int i = 1; i<=n; i++)
            answer = Math.max(answer, dist[i]);
        System.out.println(answer);
    }
}

class Pair {
    int to, weight;

    Pair(int to, int weight) {
        this.to = to;
        this.weight = weight;
    }
}