import java.util.*;

public class Main {
    static int n;
    static List<Integer> answer = new ArrayList<>();
    static boolean[] visited;

    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();

        visited = new boolean[n+1];

        Backtracking(0);
    }

    private static void Backtracking(int cur) {
        if(cur == n) {
            for(int i : answer)
                System.out.print(i + " ");
            System.out.println();
            return;
        }

        for(int i = 1; i<=n; i++) {
            if(visited[i]) continue;

            visited[i] = true;
            answer.add(i);
            Backtracking(cur+1);
            answer.remove(answer.size() - 1);
            visited[i] = false;
        }
    }
}