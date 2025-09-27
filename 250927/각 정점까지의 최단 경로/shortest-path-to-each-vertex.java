import java.util.*;
import java.io.*;

public class Main {
    static int n,m;
    static int startIdx;
    static List<Pair>[] map;
    static int[] dist;

    static PriorityQueue<Pair> pq = new PriorityQueue<>((a,b) -> a.weight-b.weight);
    

    public static void main(String[] args) throws IOException {
        // Please write your code here.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        n = line[0]; m = line[1];
        startIdx = Integer.parseInt(br.readLine());

        map = new ArrayList[n+1];
        dist = new int[n+1];
        for(int i = 0; i<=n; i++)
            map[i] = new ArrayList<>();
        for(int i = 0; i<m; i++) {
            line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
            map[line[0]].add(new Pair(line[1], line[2]));
            map[line[1]].add(new Pair(line[0], line[2]));
        }
        for(int i = 0; i<=n; i++)
            dist[i] = 100_000_000;

        pq.add(new Pair(startIdx, 0));
        dist[startIdx] = 0;
        while(!pq.isEmpty()) {
            Pair p = pq.poll();
            int minIdx = p.to;
            int minVal = p.weight;

            for(int i = 0; i<map[minIdx].size(); i++) {
                int targetIdx = map[minIdx].get(i).to;
                int targetVal = map[minIdx].get(i).weight;

                int newDist = dist[minIdx] + targetVal;
                if(dist[targetIdx] > newDist) {
                    dist[targetIdx] = newDist;
                    pq.add(new Pair(targetIdx, newDist));
                }
            }
        }

        for(int i = 1; i<=n; i++)
            System.out.println(dist[i] == 100_000_000 ? -1 : dist[i]);
    }
}

class Pair {
    int to, weight;

    Pair(int to, int weight) {
        this.to = to;
        this.weight = weight;
    }
}