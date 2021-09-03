package cl.awakelab.modelo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="capacitacion")
public class Capacitacion {
	
	
	@Id
	@Column(name="idCap")
	private int idEntity;
	
	@Column(name="fecCap")
	private String diaEntity;
	
	@Column(name="horCap")
	private String horaEntity;
	
	@Column(name="lugCap")
	private String lugarEntity;
	
	@Column(name="durCap")
	private String durEntity;
	
	
	//@ManyToOne
	//@JoinColumn(name="cliente_rutCli") se pone a otra tabla cuando la agregue a la base de dato
	@Column(name="cliente_rutCli")
	private String rutCliEntity;
	
	
	public Capacitacion() {
		super();
	}
	
	public Capacitacion(int idEntity, String diaEntity, String horaEntity, String lugarEntity, String durEntity,
			String rutCliEntity) {
		super();
		this.idEntity = idEntity;
		this.diaEntity = diaEntity;
		this.horaEntity = horaEntity;
		this.lugarEntity = lugarEntity;
		this.durEntity = durEntity;
		this.rutCliEntity = rutCliEntity;
	}

	public int getIdEntity() {
		return idEntity;
	}

	public void setIdEntity(int idEntity) {
		this.idEntity = idEntity;
	}

	public String getDiaEntity() {
		return diaEntity;
	}

	public void setDiaEntity(String diaEntity) {
		this.diaEntity = diaEntity;
	}

	public String getHoraEntity() {
		return horaEntity;
	}

	public void setHoraEntity(String horaEntity) {
		this.horaEntity = horaEntity;
	}

	public String getLugarEntity() {
		return lugarEntity;
	}

	public void setLugarEntity(String lugarEntity) {
		this.lugarEntity = lugarEntity;
	}

	public String getDurEntity() {
		return durEntity;
	}

	public void setDurEntity(String durEntity) {
		this.durEntity = durEntity;
	}

	public String getRutCliEntity() {
		return rutCliEntity;
	}

	public void setRutCliEntity(String rutCliEntity) {
		this.rutCliEntity = rutCliEntity;
	}
	
}
