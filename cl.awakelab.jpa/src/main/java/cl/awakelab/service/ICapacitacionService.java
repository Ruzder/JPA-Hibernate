package cl.awakelab.service;

import java.util.List;

import cl.awakelab.modelo.Capacitacion;

public interface ICapacitacionService {
	
	
	public List<Capacitacion>readAll();
	public  Capacitacion readOne(int idEntity);
	public void update(Capacitacion c);
	public void create(Capacitacion c);
	public void delete(int idEntity);

}
