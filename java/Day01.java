import java.util.Scanner;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.io.File;

public class Day01 {

    public static int getDifference(String file) {
        ArrayList<Integer> left = new ArrayList<>();
        ArrayList<Integer> right = new ArrayList<>();
        // organize into a left number and right number list
        try (Scanner sc = new Scanner(new File(file))){
            while (sc.hasNextLine()) {
                String[] line = sc.nextLine().split("\\s+");
                left.add(Integer.parseInt(line[0]));
                right.add(Integer.parseInt(line[1]));
            }
        } catch (FileNotFoundException e) {
            System.out.println("error, no file");
        }
        // sort the inputs, use insertion sort
        Collections.sort(left);
        Collections.sort(right);
        // get the frequency array of the right
        // index (of number), freq (of number)
        Map<Integer, Integer> freq = new HashMap<>();
        for (Integer i : right){
            if (!freq.containsKey(i)) {
                freq.put(i, 0);
            }
            freq.put(i, freq.get(i)+1);
        }
        int sim = 0;
        for (Integer i : left) {
            if (freq.containsKey(i)) {
                sim += i * freq.get(i);
            }
            
        }
        System.out.println("Sim: " + sim);

        // get difference of each and add it to the sum
        int sum = 0;
        for (int i = 0; i < left.size(); i++) {
            sum += Math.abs(left.get(i) - right.get(i));
        }
        System.out.println("Sum: " + sum);
        return sum;
    }
    


    public static void main(String[] args) {
        System.out.println(getDifference("C:\\Users\\abby-\\projects\\AdventOfCode\\days\\input.txt"));
    }
}
