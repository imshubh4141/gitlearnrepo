#include <iostream>
#include <vector>

using namespace std;

int main() {
//    for (int num1{1};num1 <= 10;num1++){
//        for(int num2{1};num2 <=10;num2++){
//            cout << num1 << "*" << num2 << "=" << num1 * num2 << endl;
//        }
//         cout << "------------------" << endl;
//    }

    int num_datas{};
    cout << "How much data do you want to enter: ";
    cin >> num_datas;
    
    vector <int> data{};
    
    for (int i{1};i <= num_datas;i++){
        int num_data{}; 
        cout << "Enter data number " << i <<" :";
        cin >> num_data;
        data.push_back(num_data);
    }
    
    cout <<"\nDisplaying Histogram" << endl;
    for(auto val:data){
        for(int i{1};i <= val;i++){
            if (i % 5 == 0)
                cout << "*";
            else
                cout << "-";
        }
        cout << endl;
    }
            
        cout << endl;
        return 0;
}
        
       




