import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

public class Day02 {

    // Reads the file and generates a list of reports
    public static List<List<Integer>> getReports(String file) {
        List<List<Integer>> reports = new ArrayList<>();
        try (Scanner sc = new Scanner(new File(file))) {
            while (sc.hasNextLine()) {
                String line = sc.nextLine();
                String nums[] = line.split(" ");
                List<Integer> reportNums = new ArrayList<>();
                for (String num : nums) {
                    reportNums.add(Integer.parseInt(num));
                }
                reports.add(reportNums);
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        }
        return reports;
    }

    // Part 1
    public static int getSafe(String file) {
        List<List<Integer>> reports = getReports(file);
        int safeCount = 0;

        for (List<Integer> report : reports) {
            boolean isSafe = true;
            boolean increasing = report.get(0) < report.get(1);

            for (int i = 1; i < report.size(); i++) {
                int diff = Math.abs(report.get(i - 1) - report.get(i));
                if (diff > 3 || diff < 1) {
                    isSafe = false;
                    break;
                }
                if (increasing && report.get(i) < report.get(i - 1)) {
                    isSafe = false;
                    break;
                } else if (!increasing && report.get(i) > report.get(i - 1)) {
                    isSafe = false;
                    break;
                }
            }
            if (isSafe) safeCount++;
        }

        System.out.println("Part 1: " + safeCount);
        return safeCount;
    }

    // Part 2
    public static int getSafePart2(String file) {
        List<List<Integer>> reports = getReports(file);
        int safeCount = 0;

        for (List<Integer> report : reports) {
            if (isReportSafe(report)) {
                safeCount++;
            } else {
                // Try removing each level and check if it becomes safe
                for (int i = 0; i < report.size(); i++) {
                    List<Integer> modifiedReport = new ArrayList<>(report);
                    modifiedReport.remove(i);
                    if (isReportSafe(modifiedReport)) {
                        safeCount++;
                        break;
                    }
                }
            }
        }

        System.out.println("Part 2: " + safeCount);
        return safeCount;
    }

    // Helper method to check if a report is safe
    private static boolean isReportSafe(List<Integer> report) {
        if (report.size() < 2) return true; 

        boolean increasing = report.get(0) < report.get(1);

        for (int i = 1; i < report.size(); i++) {
            int diff = Math.abs(report.get(i - 1) - report.get(i));
            if (diff > 3 || diff < 1) return false;
            if (increasing && report.get(i) < report.get(i - 1)) return false;
            if (!increasing && report.get(i) > report.get(i - 1)) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(getSafe("C:\\Users\\abby-\\projects\\advent2024\\java\\input.txt"));
        System.out.println(getSafePart2("C:\\Users\\abby-\\projects\\advent2024\\java\\input.txt"));
    }
}
