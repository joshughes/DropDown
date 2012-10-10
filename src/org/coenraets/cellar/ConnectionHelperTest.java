package org.coenraets.cellar;

import static org.junit.Assert.*;

import org.junit.Test;

import java.sql.Connection;
import java.sql.SQLException;

public class ConnectionHelperTest {

	@Test
	public void test() {
		try {
			Connection help = ConnectionHelper.getConnection();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
